import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkmodeService } from './services/darkmode.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { GamePageComponent } from './game-page/game-page.component';

export interface ITodo {
  id: string;
  task: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GameBoardComponent,
    NavbarComponent,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    GamePageComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-todo-app';
  darkModeService: DarkmodeService = inject(DarkmodeService);
}
