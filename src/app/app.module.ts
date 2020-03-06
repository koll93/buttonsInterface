import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { PageInterfaceComponent } from './page-interface/page-interface.component';
import { RoutingModule } from './routing.module';

import localeRuUA from '@angular/common/locales/ru-UA';
import {registerLocaleData} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ButtonsComponent} from './buttons/buttons.component';
registerLocaleData(localeRuUA);

@NgModule({
  declarations: [
    AppComponent,
    PageInterfaceComponent,
    ButtonsComponent
  ],
    imports: [
        BrowserModule,
        RoutingModule,
        MatIconModule,
        MatButtonModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
