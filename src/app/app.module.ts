import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { SecondComponent } from './second/second.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
