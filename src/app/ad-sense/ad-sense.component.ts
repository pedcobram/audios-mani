import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-sense',
  templateUrl: './ad-sense.component.html',
  styleUrls: ['./ad-sense.component.css']
})
export class AdSenseComponent implements OnInit {

  @Input() public id: any;

  constructor() { }

  ngOnInit(): void {
  }

}
