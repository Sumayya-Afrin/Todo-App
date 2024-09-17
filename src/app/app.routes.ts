import { Routes } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { GamePageComponent } from './game-page/game-page.component';

export const routes: Routes = [
  {
    path: 'game-board',
    component: GameBoardComponent,
  },
];
