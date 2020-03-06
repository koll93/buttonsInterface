import {Injectable} from '@angular/core';
import data from '../../app/buttons/interfaceArray.json';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public userButtons;
  public nameUser: string;
  constructor() {
    this.nameUser = 'Petrov'; // Написать метод получения имени
    this.userButtons = this.getUserButtons(this.nameUser);
  }
  goToLink(link) {
    console.log(link); // Написать метод перехода по страницам
  }
  getUserButtons(nameUser) {   // Получить кнопки по имени пользователя
    try {
      return data.find(name => name.userName === nameUser).buttons;
    } catch (e) {
      console.log('User is not found');
      return 0;
    }
  }
}
