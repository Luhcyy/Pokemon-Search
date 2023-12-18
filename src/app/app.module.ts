import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule, BrowserModule, AppComponent, CardComponent
  ]
})
export class AppModule { }
