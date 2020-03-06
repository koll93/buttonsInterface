import {Component, OnInit,} from '@angular/core';
import {CancelService} from './cancel.service';
import {UserDataService} from './user-data.service';

@Component({
  selector: 'app-buttons',
  template: `<ng-container>
<ng-container *ngFor="let button of cancelService.userButtons">

<ng-container *ngIf="button.hasOwnProperty('buttons')"><button mat-raised-button (click)=cancelService.goToButtons(button.nameButton)>{{button.nameButton}}</button></ng-container>

<ng-container *ngIf="!button.hasOwnProperty('buttons')"><button mat-raised-button (click)="dataUsersService.goToLink(button.linkButton)">{{button.nameButton}}</button></ng-container>
</ng-container><button mat-raised-button (click)="cancelService.goBack()">Назад</button></ng-container>  `,
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

constructor(public cancelService: CancelService, public dataUsersService: UserDataService) {}

ngOnInit(): void {}

}
