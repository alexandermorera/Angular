import { ChatService } from './../../chat.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  mensaje = new FormControl('', Validators.required);

  constructor(private service: ChatService) { }

  send(): void {
    this.service.messages.emit(this.mensaje.value);
    this.mensaje.reset();
  }

  sendEnter(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.send();
    }
  }

  ngOnInit(): void {
  }

}
