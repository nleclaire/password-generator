import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { HeaderComponent } from './component/header/header.component';

import { PasswordService } from './service/password/password.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
