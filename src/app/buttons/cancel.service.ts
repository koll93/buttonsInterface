import {Injectable} from '@angular/core';
import {UserDataService} from './user-data.service';

function CancelObject(titleLevel: string, userButtons: any) { // функция создания объекта состояния для сохранения истории переходов
  this.titleLevel = titleLevel;
  this.userButtons = userButtons;
}

@Injectable({
  providedIn: 'root'
})
export class CancelService {
  public cancelArray: any = [];
  public titleLevel;
  public userButtons;

  constructor(public dataUsersService: UserDataService) {
    this.userButtons = dataUsersService.userButtons;
    this.titleLevel = ' ';
    this.saveCancel(' ', this.userButtons);
  }

  saveCancel(titleLevel: string, userButtons: any) {
    this.cancelArray.push(new CancelObject(titleLevel, userButtons));
  }

  getCancelArray() {
    this.cancelArray.pop();
    return this.cancelArray[this.cancelArray.length - 1];
  }

  goBack() {
    if (this.cancelArray.length > 1) {
    const arr = this.getCancelArray();
    this.titleLevel = arr.titleLevel;
    this.userButtons = arr.userButtons;
    }
  }

  goToButtons(nameButton) {
    this.userButtons = this.userButtons.find(name => name.nameButton === nameButton).buttons;
    this.titleLevel = this.titleLevel + ' > ' + nameButton;
    this.saveCancel(this.titleLevel, this.userButtons);
  }
}
