import { TestBed } from '@angular/core/testing';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

import { MessageService } from './message.service';

describe('MessageService', () => {

  it('should test', () => {
    const user: User = new User('Haci','');
    const thread: Thread = new Thread('t1', 'Haci', '');
    const msg1: Message = new Message({
      author: user,
      text: 'Hi, I am Haci :)',
      thread: thread
    });
    const msg2: Message = new Message({
      autor: user,
      text: 'bye bye',
      thread: thread
    });

    const messageService: MessageService = new MessageService();

    //listen to each msg individually as it comes in
    messageService.newMessages.subscribe((newMessage: Message) => {
      console.log('=> newMessages: ' + newMessage.text);
    });

    //listen to the stream of most current messages
    messageService.messages.subscribe((messages: Message[]) => {
      console.log('=> messages: ' + messages.length);
    });

    messageService.addMessage(msg1);
    messageService.addMessage(msg2);
    messageService.addMessage(msg2);
    messageService.addMessage(msg2);
  });

});
