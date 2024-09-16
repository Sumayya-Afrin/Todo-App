import { Component, inject, Inject } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  darkModeService: DarkmodeService = inject(DarkmodeService);
  toggleDarkMode() {
    console.log('Before toggle:', this.darkModeService.darkModeSignal()); // Log current value
    this.darkModeService.updateDarkMode();
    console.log('After toggle:', this.darkModeService.darkModeSignal()); // Log updated value
  }
}
