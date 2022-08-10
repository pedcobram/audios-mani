import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  providers: [AudioPlayerService]
})
export class AudioPlayerComponent implements OnInit {

  @Input() public audioId: any = "";
  private estadoActual: String = "";
  public textoBoton: any = "Reproducir audio";

  constructor(private audioPlayerService: AudioPlayerService) { }

  ngOnInit(): void {
    this.audioPlayerService.getPlayerStatus().subscribe((estado: any) => {
        this.estadoActual = estado;
        if (estado == "playing") {
            this.textoBoton = "Volver a reproducir";
        } else {
            this.textoBoton = "Reproducir audio";
        }
    });  
  }

  playAudio() {
    console.log(this.estadoActual);
    this.audioPlayerService.setAudio("https://drive.google.com/uc?export=download&id=" + this.audioId);
    this.audioPlayerService.playAudio();
  }

}