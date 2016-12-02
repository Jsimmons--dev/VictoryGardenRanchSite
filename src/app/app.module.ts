import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {appRoutes} from "./app.routes";

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";

import "materialize-css";
import "angular2-materialize";
import {MaterializeDirective} from "angular2-materialize";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaterializeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
