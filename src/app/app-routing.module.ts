import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AdSenseComponent } from './ad-sense/ad-sense.component';

const routes: Routes = [
  { path: '', redirectTo: 'audios', pathMatch: 'full'},
  { path: 'audios', component: AudioPlayerComponent },
  { path: 'ad-sense-test', component: AdSenseComponent },
  { path: '**', redirectTo: 'audios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
