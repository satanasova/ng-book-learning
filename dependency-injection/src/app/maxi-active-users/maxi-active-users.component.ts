import { Component, OnInit } from '@angular/core';
import { MaxiUserService } from '../services/maxi-user.service';

@Component({
  selector: 'app-maxi-active-users',
  templateUrl: './maxi-active-users.component.html',
  styleUrls: ['./maxi-active-users.component.css']
})
export class MaxiActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: MaxiUserService) {
    this.users = this.userService.activeUsers;
   }

  ngOnInit(): void {
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
