import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Thread } from '../thread/thread.model';
import { ThreadService } from '../thread/thread.service';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(public messagesService: MessageService,
              public threadsService: ThreadService) { }

  ngOnInit(): void {
    const currentThreadMessages= combineLatest([this.threadsService.currentThread, this.messagesService.messages])
      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount = _.reduce(messages, (sum: number, msg: Message) => {
          const messageIsInCurrentThread: boolean = 
            msg.thread && currentThread && (currentThread.id === msg.thread.id);
          // note: in a "real" app you should also exclude
          // messages that were authored by the current user b/c they've
          // already been "read"
          if (msg && !msg.isRead && !messageIsInCurrentThread) {
            sum = sum + 1;
          }
          return sum;
        }, 0);
      });
  }
}
