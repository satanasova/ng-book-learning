import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Thread } from './thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  //'thread' is an observable that contains the most up to date list of threads
  threads: Observable<{[key: string]: Thread}>;

  // `orderedThreads` contains a newest-first chronological list of threads
  orderThreads: Observable<Thread[]>;

  // `currentThread` contains the currently selected thread
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());

  // `currentThreadMessages` contains the list of messages for the currently selected thread
  currentThreadMessages: Observable<Message[]>;
  
  constructor(public messagesService: MessageService) { 
    this.threads = messagesService.messages.pipe(
      map((messages: Message[]) => {
        const threads: {[key:string]: Thread} = {};
        
        messages.forEach((message: Message) => {
          threads[message.thread.id] = threads[message.thread.id] || message.thread;
          //cache the most recent message for each thread
          const messagesThread: Thread = threads[message.thread.id];
          if(!messagesThread.lastMessage || 
              messagesThread.lastMessage.sentAt < message.sentAt) {
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      })
    )

    this.orderThreads = this.threads.pipe(
      map((threadGroups: {[key: string]: Thread}) => {
        const threads: Thread[] = _.values(threadGroups);
        return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
      })
    )

    this.currentThread.subscribe(this.messagesService.markThreadAsRead);

    this.currentThreadMessages = combineLatest([this.currentThread, messagesService.messages])
      .pipe(map(([currentThread, messages]) => messages
              .filter((m: Message) => m.thread.id === currentThread.id)
              .map((msg: Message) => {
                msg.isRead = true;
                return msg;
              }))  
      )
  
  }

  setCurrentThread(newThread: Thread):void {
    this.currentThread.next(newThread);
  }
}
