import { Component, Input } from '@angular/core';
import data from '../assets/ids-audios.json';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3ZB3AQdCclhcvl4DXFScJv_9qQMpd9XY",
  authDomain: "audios-mani.firebaseapp.com",
  projectId: "audios-mani",
  storageBucket: "audios-mani.appspot.com",
  messagingSenderId: "284338908142",
  appId: "1:284338908142:web:417b981c87a27af7e7fcff",
  measurementId: "G-P9HL5T7CTB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

constructor () { 
  analytics;
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
