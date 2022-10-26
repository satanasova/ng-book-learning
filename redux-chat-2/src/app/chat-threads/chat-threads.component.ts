import { Component, OnInit, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import { Thread } from '../thread/thread.model';
import { AppState } from '../app.reducer';
import * as ThreadActions from '../thread/thread.actions';
import * as Redux from 'redux';
import { getAllThreads, getCurrentThread } from '../thread/thread.reducer';
import { state } from '@angular/animations';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.scss']
})
export class ChatThreadsComponent implements OnInit {
  threads: Thread[] = [];
  currentThreadId: string = '';

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) { 
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit(): void {
  }

  updateState() {
    const state = this.store.getState();
    this.threads = getAllThreads(state);
    // console.log(this.threads)
    let currentThread = getCurrentThread(state);
    if (currentThread) {
      this.currentThreadId = getCurrentThread(state).id;
    }
    // console.log(this.currentThreadId)
  };

  handleThreadClicked(thread: Thread): void {
    this.store.dispatch(ThreadActions.selectThread(thread));

    // console.log(thread.id)
    // console.log(this.currentThreadId)
  }
}
