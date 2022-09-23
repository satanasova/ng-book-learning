import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';
import { MaxiActiveUsersComponent } from './maxi-active-users/maxi-active-users.component';
import { MaxiInactiveUsersComponent } from './maxi-inactive-users/maxi-inactive-users.component';
import { MaxiUserService } from './services/maxi-user.service';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsService } from './services/analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    MaxiActiveUsersComponent,
    MaxiInactiveUsersComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, AnalyticsService, MaxiUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
