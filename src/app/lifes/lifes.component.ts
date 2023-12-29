import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifes',
  templateUrl: './lifes.component.html',
  styleUrls: ['./lifes.component.scss'],
})
export class LifesComponent  implements OnInit {

  lifes: number = 0;

  constructor() { }

  ngOnInit() {

  }

  addLife() {
    this.lifes++;
  }

  removeLife() {
    this.lifes--;
  }

}
