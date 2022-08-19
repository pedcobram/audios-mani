import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  providers: [AudioPlayerService]
})
export class AudioPlayerComponent implements OnInit, OnDestroy {

  @Input() public audioId: any;
  @Input() public titulo: any;
  @Output() public estadoDelAudio = new EventEmitter<Array<string>>();
 
  public estadoActual: string;
  public textoBoton: any = "Reproducir audio";

  private subscription: Subscription = new Subscription;

  constructor(private audioPlayerService: AudioPlayerService) { }

  ngOnInit(): void {
    this.subscription = this.audioPlayerService.getPlayerStatus().subscribe((estado: any) => {
        this.estadoActual = estado;
        this.estadoDelAudio.emit([this.audioId, this.estadoActual]);
        if (estado == "loading") {
          this.textoBoton = "Cargando...";
        } else if (estado == "playing") {
            this.textoBoton = "Parar audio";
        } else {
            this.textoBoton = "Reproducir audio";
        }
    });
  }

  playAudio() {
    if (this.estadoActual == 'loading' || this.estadoActual == 'playing') {
      return
    }
    this.audioPlayerService.setAudio("https://drive.google.com/uc?export=download&id=" + this.audioId);
    this.audioPlayerService.playAudio();
  }

  pauseAudio() {
    this.audioPlayerService.pauseAudio();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}