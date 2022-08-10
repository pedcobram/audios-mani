import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: 'audios', pathMatch: 'full'},
  { path: 'audios', component: AudioPlayerComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', redirectTo: 'audios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
