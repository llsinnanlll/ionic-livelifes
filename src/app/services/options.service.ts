import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {


  private minutesSubject = new BehaviorSubject<number>(1);
  private secondsSubject = new BehaviorSubject<number>(30);
  private lifesSubject = new BehaviorSubject<number>(3);


  intervalId1: any;
  intervalId2: any;
  
  getMinutes() : Observable<number> {
    return this.minutesSubject.asObservable();
  }
  
  getSeconds() : Observable<number> {
    return this.secondsSubject.asObservable();
  }
  
  getLifes() : Observable<number> {
    return this.lifesSubject.asObservable();
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

  resetTimers(minutes: number, seconds: number, lifes: number) {
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
    this.minutesSubject.next(minutes);
    this.secondsSubject.next(seconds);
    this.lifesSubject.next(lifes);
  }
}