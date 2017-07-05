import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {rootcomponent} from  './rootcomponent';

@NgModule({
  declarations: [
    AppComponent,
    rootcomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [rootcomponent]
})
export class AppModule { }
