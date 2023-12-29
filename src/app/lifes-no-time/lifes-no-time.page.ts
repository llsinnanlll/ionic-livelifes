import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-lifes-no-time',
  templateUrl: './lifes-no-time.page.html',
  styleUrls: ['./lifes-no-time.page.scss'],
})
export class LifesNoTimePage implements OnInit {

  lifes1: number = 0;
  lifes2: number = 0;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.optionsService.getLifes().subscribe(lifes => {
      this.lifes1 = lifes;
      this.lifes2 = lifes;
    });
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
