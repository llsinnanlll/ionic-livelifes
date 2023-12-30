import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {


  private minutesSubject = new BehaviorSubject<number>(1);
  private secondsSubject = new BehaviorSubject<number>(30);
  private lifesSubject = new BehaviorSubject<number>(3);
  private roundSubject = new BehaviorSubject<number>(1);


  intervalId1: any;
  intervalId2: any;
  


  getRound() : Observable<number> {
    return this.roundSubject.asObservable();
  }

  getMinutes() : Observable<number> {
    return this.minutesSubject.asObservable();
  }
  
  getSeconds() : Observable<number> {
    return this.secondsSubject.asObservable();
  }
  
  getLifes() : Observable<number> {
    return this.lifesSubject.asObservable();
  }

  setRound(minutes: number) {
    this.roundSubject.next(minutes);
  }
  
  setMinutes(minutes: number) {
    this.minutesSubject.next(minutes);
  }
  
  setSeconds(seconds: number) {
    this.secondsSubject.next(seconds);
  }
  
  setLifes(lifes: number) {
    this.lifesSubject.next(lifes);
  }

  resetTimers() {
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
    this.minutesSubject.next(this.minutesSubject.getValue());
    this.secondsSubject.next(this.secondsSubject.getValue());
    this.lifesSubject.next(this.lifesSubject.getValue());
    this.roundSubject.next(this.roundSubject.getValue());
  }

  resetTimer1() {
    clearInterval(this.intervalId1);
    this.minutesSubject.next(this.minutesSubject.getValue());
    this.secondsSubject.next(this.secondsSubject.getValue());
  }

  resetTimer2() {
    clearInterval(this.intervalId2);
    this.minutesSubject.next(this.minutesSubject.getValue());
    this.secondsSubject.next(this.secondsSubject.getValue());
  }
}