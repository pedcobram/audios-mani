import { Component, Input } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import data from '../assets/ids-audios.json';
import ads from '../assets/ids-ads.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@Input() public allowMultiple: boolean = true;
public titulo: string = "Audios del Mani";
private idsEnCurso: string[] = [];

// Importamos los datos desde un JSON
public audios = data;
public ads = ads;

constructor(analytics: AngularFireAnalytics) {
  analytics.logEvent('custom_event', { });
} 

estadoDelAudio($event: any) {
  if (!this.allowMultiple && (this.idsEnCurso.length > 1 && $event[1] === 'playing')) {
    //Si hay un audio previo reproduciendose se impide
    document.getElementById($event[0])?.getElementsByTagName("button")[0].click();
  }

  if($event[1] === 'playing' || $event[1] === 'loading') {
    // Añadimos el id que se está reproduciendo si no se ha añadido ya
    if (!this.idsEnCurso.includes($event[0])){
      this.idsEnCurso.push($event[0]);
    }
  } 
  
  if ($event[1] === 'paused' || $event[1] === 'ended')  {
    // Eliminamos el id que se acaba de reproducir o se ha parado por el usuario
    const index = this.idsEnCurso.indexOf($event[0]);
    if (index > -1) {
      this.idsEnCurso.splice(index, 1);
    }
  }
}

cambiarModoReproduccion() {
  this.allowMultiple = !this.allowMultiple;
}

}
