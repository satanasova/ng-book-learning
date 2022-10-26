import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { appStoreProviders } from './app.store';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatNavBarComponent,
    ChatPageComponent,
    ChatThreadComponent,
    ChatThreadsComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
