import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './page-interface/page/login/login.component';
import {HomePageComponent} from './page-interface/page/home-page/home-page.component';
import {PageComponent} from './page-interface/page/page/page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PageInterfaceComponent} from './page-interface/page-interface.component';

@NgModule({
  declarations: [LoginComponent, HomePageComponent, PageComponent],
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomePageComponent},
      {path: 'page', component: PageComponent},
      {path: 'homehome', component: PageInterfaceComponent},
      // {path: '**', redirectTo: 'login'}
    ]),
    MatExpansionModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class RoutingModule { }
