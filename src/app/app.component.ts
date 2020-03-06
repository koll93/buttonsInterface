import {Component} from '@angular/core';
import {ButtonsComponent} from './buttons/buttons.component';
import {CancelService} from './buttons/cancel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ButtonsComponent, CancelService]
})
export class AppComponent {

constructor(public cancelService: CancelService) {}

}

