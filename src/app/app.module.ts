import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MazoService} from './_servicios/mazo.service'


import { AppComponent } from './app.component';
import { SieteYMediaComponent } from './siete-y-media/siete-y-media.component';

import { appRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SieteYMediaComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    MazoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
