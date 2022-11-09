import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message!: Message;
  incoming!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.incoming = !this.message.author.isClient;
  }

}
