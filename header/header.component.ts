import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 photo = '';
 name = '';

 constructor(private service: ChatService) {

 }

  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.name = val.name;
      this.photo = val.photo;
    });
  }

}
