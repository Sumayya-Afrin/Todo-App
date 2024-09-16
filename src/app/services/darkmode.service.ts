import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  darkModeSignal = signal<'dark' | 'null'>('null'); // Explicitly type the signal

  updateDarkMode() {
    this.darkModeSignal.update((value) => {
      const newValue = value === 'dark' ? 'null' : 'dark';
      console.log('Toggling dark mode to:', newValue); // Log the new value
      return newValue;
    });
  }

  constructor() {}
}
