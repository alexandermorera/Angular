import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactListComponent } from './sidebar/contact-list/contact-list.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './content/header/header.component';
import { MessagesAreaComponent } from './content/messages-area/messages-area.component';
import { SendComponent } from './content/send/send.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactListComponent,
    ContentComponent,
    HeaderComponent,
    MessagesAreaComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
