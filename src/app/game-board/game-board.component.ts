import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  isGameOver: boolean = false;
  currentPlayer: string = 'X';
  winner: string = '';
  initialTime: number = 30;
  remainingTime: number = 30;
  timerSubscription: Subscription | undefined;
  isPaused: boolean = false;

  // ngOnInit() {
  //   this.startTimer();
  // }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    //this.remainingTime = this.initialTime;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      if (!this.isPaused) {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          this.stopTimer();
          this.handleTimeOut();
        }
      }
    });
  }

  handleTimeOut() {
    this.isGameOver = true;
    this.winner = this.currentPlayer = 'X' ? 'O' : 'X';
  }

  pauseTimer() {
    this.isPaused = true;
  }

  resumeTimer() {
    if (this.isPaused) {
      this.isPaused = false;
    }
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
  }

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '' && !this.isGameOver) {
      this.board[row][col] = this.currentPlayer;
      console.log(this.board[row][col]);
      this.switchPlayer();
      this.checkWinner();
      this.startTimer();
    }
  }

  switchPlayer() {
    console.log('method is executing...');

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  newGame() {
    console.log('reset');

    this.isGameOver = false;
    this.currentPlayer = 'X';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];

    this.winner = '';

    this.remainingTime = this.initialTime;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.startTimer();
  }

  checkWinner() {
    const winningCombinations = [
      // Rows
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // Columns
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // Diagonals
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const combination of winningCombinations) {
      const [[a, b], [c, d], [e, f]] = combination; //array destructuring
      if (
        this.board[a][b] &&
        this.board[a][b] === this.board[c][d] &&
        this.board[a][b] === this.board[e][f]
      ) {
        this.isGameOver = true;
        this.winner = this.board[a][b];
        return;
      }
    }

    if (this.board.flat().every((cell) => cell !== '')) {
      this.isGameOver = true; // Set the game as over
      this.winner = 'Draw'; // Set the winner to 'Draw'
    }
  }
}
