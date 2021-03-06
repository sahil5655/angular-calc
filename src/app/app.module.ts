import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { FormsModule } from '@angular/forms';
import { SubstractionComponent } from './substraction/substraction.component';
import { DivisionComponent } from './division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubstractionComponent,
    DivisionComponent
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
