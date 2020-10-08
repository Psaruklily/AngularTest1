import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ZoomDirective} from './zoom.directives';
import {Zoom1Derective} from './zoom1.directive';



@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    Zoom1Derective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
