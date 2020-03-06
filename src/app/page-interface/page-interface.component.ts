import {Component, OnDestroy, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-page-interface',
  template: `
  <div class="container"><ng-container><p>

    <a href="/homehome"><mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon></a> |

    <a routerLinkActive="active"
       routerLink="/home">Управление (строительства и развития системы применения БЛА)</a> |

    <!-- <a routerLinkActive="active"
      routerLink="/page">Catalog</a>-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">

    <span>{{this.dateView()}}</span></p></ng-container>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./page-interface.component.css']
})
export class PageInterfaceComponent implements OnInit, OnDestroy {

  f2: boolean;
  intervalId: number;
  constructor() {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.dateView(), 1000);
  }
  dateView() {
    const date: Date = new Date();
    const formatDate = new DatePipe('ru-ua');
    return formatDate.transform(date, 'EEEE, d MMMM, y, HH:mm:ss');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
