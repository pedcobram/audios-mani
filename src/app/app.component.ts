import { Component } from '@angular/core';
import data from '../assets/ids-audios.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor ( ) {}  

titulo = "Audios del Mani";

audios = data;

}
