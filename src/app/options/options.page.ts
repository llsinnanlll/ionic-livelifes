import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  //Options
  minutes: number = 1;
  seconds: number = 30;
  lifes: number = 3;

  //Picker columns and buttons
  pickerColumnsTimer: any;
  pickerButtonsTimer: any;
  pickerColumnsLifes: any;
  pickerButtonsLifes: any;

  constructor(private optionsService: OptionsService) { 


    this.pickerColumnsTimer = [
      {
        name: 'minutes',
        options: Array.from({length: 60}, (_, i) => ({ text: `${i}` , value: i}))
      },
      {
        name: 'seconds',
        options: Array.from({length: 60}, (_, i) => ({ text: `${i}`, value: i }))
      }
    ];

    this.pickerButtonsTimer = [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Confirm',
        handler: (value: any) => {
          optionsService.setMinutes(value.minutes.value);
          optionsService.setSeconds(value.seconds.value);
        }
      }
    ];

    this.pickerColumnsLifes = [
      {
        name: 'lifes',
        options: Array.from({length: 100}, (_, i) => ({ text: `${i}` , value: i}))
      },
    ];

    this.pickerButtonsLifes = [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Confirm',
        handler: (value: any) => {
          optionsService.setLifes(value.lifes.value);
        }
      }
    ];

  }

  ngOnInit() {

    this.optionsService.getMinutes().subscribe(minutes => {
      this.minutes = minutes;
    });
    this.optionsService.getSeconds().subscribe(seconds => {
      this.seconds = seconds;
    });
    this.optionsService.getLifes().subscribe(lifes => {
      this.lifes = lifes;
    });
  }

    newGame(){
      this.optionsService.resetTimers();
    }

  

}
