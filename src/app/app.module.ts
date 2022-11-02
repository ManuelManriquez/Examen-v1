import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { ThirdButtonComponent } from './third-button/third-button.component';
import { SecondButtonComponent } from './second-button/second-button.component';
import { FirstButtonComponent } from './first-button/first-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    ThirdButtonComponent,
    SecondButtonComponent,
    FirstButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
