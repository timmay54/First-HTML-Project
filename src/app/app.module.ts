import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SquareComponent } from './square/square.component';
import { NgxSpinnerModule } from '../../node_modules/ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquareComponent
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
