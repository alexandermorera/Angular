import { AfterViewInit, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'chat';

  ngAfterViewInit(): void {
  }
}
