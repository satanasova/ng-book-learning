import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.userService.setUser({
      name: 'Haci'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is:', this.userName);
  }

}



// class Injector {
//   alreadyResolvedClasses: {className: string, class: any}[] = [];

//   resolveAndCreate(className: any) {
//     let foundClassObj = this.alreadyResolvedClasses.find(className);
//     if (!foundClassObj) {
//       const newClass =  new className();
//       this.alreadyResolvedClasses.push({className: className, class: newClass});
//     }
//   }

//   get(className) {
//     let foundClassObj = this.alreadyResolvedClasses.find(className);
//     return foundClassObj.class;
//   }
// }


// let r = [
//   {className: 'PriceService', class: PriceService},
//   {className: 'UserService', class: UserService}
// ]