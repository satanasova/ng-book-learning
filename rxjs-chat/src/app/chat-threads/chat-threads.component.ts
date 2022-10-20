import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadService } from '../thread/thread.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;
  
  constructor(public threadsService: ThreadService) {
    this.threads = threadsService.orderThreads;
  }

  ngOnInit(): void {
  }

}
