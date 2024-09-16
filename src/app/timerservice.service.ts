import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerserviceService {
  private timer$ = new BehaviorSubject<number>(0);

  private timerSubscription: Subscription | null = null;

  constructor() {}
}
