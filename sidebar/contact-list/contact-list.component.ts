import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { Contact } from './lcontact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  today = new Date();

  list: any = [];
  // tslint:disable-next-line: ban-types
  message!: Object;

  constructor(private service: ChatService, private http: HttpClient) { }

  showChats(contact: any): void {
    this.service.showContact.emit(contact);
  }

  checkToday(lastDate: Date): boolean {
    return this.today.getDate() === lastDate.getDate() &&
    this.today.getMonth() === lastDate.getMonth() &&
    this.today.getFullYear() === lastDate.getFullYear();
  }

  checkYesterday(lastDate: Date): boolean {
    return (this.today.getDate() - 1) === lastDate.getDate() &&
    this.today.getMonth() === lastDate.getMonth() &&
    this.today.getFullYear() === lastDate.getFullYear();
  }

  checkOther(lastDate: Date): boolean {
    return this.today.getDate() < lastDate.getDate() &&
    this.today.getMonth() <= lastDate.getMonth() &&
    this.today.getFullYear() <= lastDate.getFullYear();
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.list = res;
      this.message = res;
    });
  }

}
