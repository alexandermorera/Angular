import { ChatService } from './../../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  styleUrls: ['./messages-area.component.scss']
})
export class MessagesAreaComponent implements OnInit {

  messages: string[] = [];
  constructor(private service: ChatService) { }

  ngOnInit(): void {
    this.service.messages.subscribe(val => {
    this.messages.push(val);
    });
  }

}
