import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SquareComponent } from './square/square.component';
import { NgxSpinnerModule } from '../../node_modules/ngx-spinner';
import { AppIntroComponent } from './app-intro/app-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquareComponent,
    AppIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
