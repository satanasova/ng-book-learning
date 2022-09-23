import { Component, OnInit } from '@angular/core';
import { env } from 'process';
import { MaxiUserService } from '../services/maxi-user.service';

@Component({
  selector: 'app-maxi-inactive-users',
  templateUrl: './maxi-inactive-users.component.html',
  styleUrls: ['./maxi-inactive-users.component.css']
})
export class MaxiInactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: MaxiUserService) { 
    this.users = this.userService.inactiveUsers;
  }

  ngOnInit(): void {
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}

// interface ErrorSender {
//   send(errorEvents): void;
// }


// export class ErrorsService {
//   errorEvents: any[] = [];
//   errorSender: ErrorSender;

//   constructor(errorSender: ErrorSender) {
//     this.errorSender = errorSender;
//   }

//   saveError(error: any): void {
//     this.errorEvents.push(error);
//   }

//   sendErrors() {
//     this.errorSender.send(this.errorEvents);
//   }
// }

// //AppModule
// {
//   providers: [
//     {
//       provide: ErrorsService,
//       useFactory() {
//         let errorSender: ErrorSender;

//         if (env.prod) {
//           errorSender = new MailErrorSender();
//         } else if (env.dev) {
//           errorSender = new TextErrorSender();
//         }

//         return new ErrorsService(errorSender);
//       }
//     }
//   ]
// }

// // node_modules ------------
// class MailErrorSender implements ErrorSender {
//   private mailTo: string = 'bugs@peckasait.com';

//   private sendMail(to, body) {
//     // creating the mail
//   }

//   send(errorEvents: any): void {
//     // send errors in mail
//     this.sendMail(this.mailTo, errorEvents.join('\n'));
//   }
// }
// class TextErrorSender implements ErrorSender {

//   send(errorEvents: any): void {
//     // save errors to text
//     this.fs.writeFile('./errors.log', errorEvents.join('/n'))
//   }
// }