import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifes-with-time',
  templateUrl: './lifes-with-time.page.html',
  styleUrls: ['./lifes-with-time.page.scss'],
})
export class LifesWithTimePage implements OnInit {

  timeCountdown1: number = 180;
  timeCountdown2: number = 180;

  turn: number = 1;

  lifes1: number = 3;
  lifes2: number = 3;

  constructor() { }

  ngOnInit() {
  }

  toggleTurn(player: number) {

    if (player == this.turn) {
      if(this.turn == 1) {
        this.turn = 2;
      } else {
        this.turn = 1;
      }
    }
  }

  removeLife1() {

    if (this.lifes1 > 0) {
      this.lifes1--;
    }
  }

  removeLife2() {
    if (this.lifes2 > 0) {
      this.lifes2--;
    }
  }

  addLife1() {
    if (this.lifes1 < 1000) {
      this.lifes1++;
    }
  }

  addLife2() {
    if (this.lifes2 < 1000) {
      this.lifes2++
    }
  }
}
