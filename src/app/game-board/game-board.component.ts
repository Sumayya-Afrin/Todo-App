import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
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

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '' && !this.isGameOver) {
      this.board[row][col] = this.currentPlayer;
      console.log(this.board[row][col]);
      this.switchPlayer();
      this.checkWinner();
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
