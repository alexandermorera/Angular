import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  list = [
    {
      name: 'Alexander',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Alexander',
      lastMessage: 'Lorem ipsum 1'
    },
    {
      name: 'Andres',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Andres',
      lastMessage: 'Lorem ipsum 2'
    },
    {
      name: 'Erick',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Erick',
      lastMessage: 'Lorem ipsum 3'
    },
    {
      name: 'Jhonatan',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Jhonatan',
      lastMessage: 'Lorem ipsum 4'
    },
    {
      name: 'Jhon',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Jhon',
      lastMessage: 'Lorem ipsum 5'
    },
    {
      name: 'Cristian',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Cristian',
      lastMessage: 'Lorem ipsum 6'
    },
    {
      name: 'Michael',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Michael',
      lastMessage: 'Lorem ipsum 7'
    },
    {
      name: 'Carlos',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Carlos',
      lastMessage: 'Lorem ipsum 8'
    }
  ];

  constructor() { }

  showChats(){
    console.log('entra');
  }

  ngOnInit(): void {
  }

}
