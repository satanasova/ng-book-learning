import { TestBed } from '@angular/core/testing';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { User } from '../user/user.model';
import { Thread } from './thread.model';
import { ThreadService } from './thread.service';
import * as _ from 'lodash';

describe('ThreadService', () => {
  it('should collect the Threads from Messages', () => {
    const haci: User = new User('Haci Baci', '');
    const pecka: User = new User('Pecka Shmecka', '');1

    const th1: Thread = new Thread('th1', 'Thread 1', '');
    const th2: Thread = new Thread('th2', 'Thread 2', '');

    const msg1: Message = new Message({
      author: haci,
      text: 'Oo, pecka, ko sta?',
      thread: th1
    });

    const msg2: Message = new Message({
      author: pecka,
      text: 'O, haci.. nishto, ti?',
      thread: th1
    });

    const msg3: Message = new Message({
      author: haci,
      text: 'I az taka',
      thread: th1
    });

    const msg4: Message = new Message({
      author: pecka,
      text: 'Obicham kotki',
      thread: th2
    });

    const messagesService: MessageService = new MessageService();
    const threadsService: ThreadService = new ThreadService(messagesService);

    threadsService.threads.subscribe((threadIdx: {[key:string]: Thread}) => {
      const threads: Thread[] = _.values(threadIdx);
      const threadNames: string = _.map(threads, (t: Thread) => t.name).join(', ');

      // console.log(`=> threads (${threads.length}): ${threadNames}`);
    });

    

    threadsService.currentThread.subscribe((thread: Thread) => {
      console.log('Current thread is', thread)
    });

    threadsService.currentThreadMessages.subscribe((messages: Message[]) => {
      console.log('Messages for current thread:')
      console.log(messages.map(m => [m.text, m.isRead]));
    });

    threadsService.setCurrentThread(th1);

    messagesService.addMessage(msg1);
    messagesService.addMessage(msg2);
    messagesService.addMessage(msg3);
    messagesService.addMessage(msg4);

    threadsService.setCurrentThread(th2);
  });
});
