import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactListComponent } from './sidebar/contact-list/contact-list.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './content/header/header.component';
import { MessagesAreaComponent } from './content/messages-area/messages-area.component';
import { SendComponent } from './content/send/send.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactListComponent,
    ContentComponent,
    HeaderComponent,
    MessagesAreaComponent,
    SendComponent,
    RutaUnoComponent,
    RutaDosComponent,
    RutaTresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
