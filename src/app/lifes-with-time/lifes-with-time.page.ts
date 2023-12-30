import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-lifes-with-time',
  templateUrl: './lifes-with-time.page.html',
  styleUrls: ['./lifes-with-time.page.scss'],
})
export class LifesWithTimePage implements OnInit {
  
  minutes1: number = 0;
  seconds1: number = 0;
  minutes2: number = 0;
  seconds2: number = 0;

  turn: number = 1;

  lifes1: number = 3;
  lifes2: number = 3;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {

    this.optionsService.getMinutes().subscribe(minutes => {
      this.minutes1 = minutes;
      this.minutes2 = minutes;

    });

    this.optionsService.getSeconds().subscribe(seconds => {
       this.seconds1 = seconds;
       this.seconds2 = seconds;

    });

    this.optionsService.getLifes().subscribe(lifes => {
      this.lifes1 = lifes;
      this.lifes2 = lifes;
    });
  }

  toggleTurn(player: number) {

    if (player == this.turn) {
      this.toggleCountdown();
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

  countDownTimer1() {
    this.optionsService.intervalId1 = setInterval(() => {
      if(this.seconds1 > 0){
        this.seconds1--;
      } else {
        if(this.minutes1 > 0) {
          this.seconds1 = 59;
          this.minutes1--;
        } else {
          clearInterval(this.optionsService.intervalId1);
        }
      }
    }, 1000);
  }


  countDownTimer2() {
    this.optionsService.intervalId1 = setInterval(() => {
      if(this.seconds2 > 0){
        this.seconds2--;
      } else {
        if(this.minutes2 > 0) {
          this.seconds2 = 59;
          this.minutes2--;
        } else {
          clearInterval(this.optionsService.intervalId2);
        }
      }
    }, 1000);
  }




toggleCountdown() {
  if (this.turn == 1) {
    clearInterval(this.optionsService.intervalId1);
    this.countDownTimer2();
    //stop the function countdowntimer1

  
  } else {
    // If the countdown is not running, start it
    clearInterval(this.optionsService.intervalId2);

    this.countDownTimer1();
  }
}

}
