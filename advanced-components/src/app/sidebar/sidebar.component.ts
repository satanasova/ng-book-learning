import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleDef } from '../example.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input('items') items: ExampleDef[] = [];

  constructor() {
    (window as any)['sidebar'] = this;
  }

  ngOnInit(): void {
  }

}


// @Component({
//   selector:'chat'
// })
// export class ChatComponent implements OnInit {
//   messages: Observable<Message[]>;
//   latReadMessageId?: string = '1jh4-0a2';
//   // unreadCount: number = 0;

//   constructor(private messagesService: MessagesService) {
//     // this.messages = await messagesService.fetchMessages();
//     this.messages = messagesService.fetchMessages() as Observable<Message>;
//     this.unreadMessages = this.messages.pipe(map(messages => {
//       const lastReadIdx = 5; //smetki
//       return messages.slice(lastReadIdx);
//     }))
//   }

//   get unreadCount() {
//     let lastMsgIdx = -1;

//     for(let i = 0; i < this.messages.length; i++) {
//       if (this.messages[i].id === this.latReadMessageId) {
//         lastMsgIdx = i;
//         break;
//       }
//     }

//     return this.messages.length - lastMsgIdx + 1;
//   }
// }

// let newChatComponent = new ChatComponent();

// lastMessage = '4561';

// messages = [
//   {id: '1234', message: 'Abe', author: 3},
//   {id: '4561', message: 'Hora', author: 3},
//   {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
//   {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
// ]

// export type Message {
//   id: string;
//   message: string;
// }

// [
//   {id: '1234', message: 'Abe', author: 3},
//   {id: '4561', message: 'Hora', author: 3},
//   {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
//   {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
// ]

// [
//   {id: '1234', message: 'Abe', author: 3},
//   {id: '4561', message: 'Hora', author: 3},
//   {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
//   {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
//   {id: '5523', message: 'Mai', author: 6},
// ]

// [
//   {id: '1234', message: 'Abe', author: 3},
//   {id: '4561', message: 'Hora', author: 3},
//   {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
//   {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
//   {id: '5523', message: 'Mai', author: 6},
//   {id: '663', message: 'nz vrat', author: 6},
// ]


// [
//   {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
//   {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
// ]

// [  {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
//   {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
//   {id: '5523', message: 'Mai', author: 6},
// ]

// [  {id: '456d', message: 'Tazi pratka nqkoi vijdal li q e', author: 3},
// {id: '6746', message: 'Na pesho jena mu q vze', author: 6},
// {id: '5523', message: 'Mai', author: 6},
// {id: '663', message: 'nz vrat', author: 6},
// ]


// // click  -> read, blabla, readLast,
// // lastReadMessage = 663 (send it to server)



// // messages()

// // lastReadMesssages()

// // unread() -> messages() x lastReadMesssages()

// // unreadCount() -> ~unread()