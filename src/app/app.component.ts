import { Component, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (  
    @Inject(DOCUMENT) private document: Document  
) {}  

titulo = "Audios del Mani";

  playMusic() {
    var music = new Audio('https://drive.google.com/uc?export=download&id=1GOGMrpCO6ESCXmKLeazydt-aVPqVtcvW');
    music.play();
  }

  playAudio() { 
    let player = <HTMLAudioElement>document.getElementById("player");
    player.play();
  }


}
