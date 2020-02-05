import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalModule, BroadcastService } from '@azure/msal-angular';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    MsalModule.forRoot({
      clientID: '92b0217a-c7b7-4c81-86ee-e006214c34a9',
      redirectUri: 'https://clean-room-ui-linux.azurewebsites.net/',
      authority: 'https://login.microsoftonline.com/599eb949-d772-4f38-bf5c-cb9b60b18882',
      cacheLocation: 'localStorage'
    })
  ],
  providers: [
    BroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
