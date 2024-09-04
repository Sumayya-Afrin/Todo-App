import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  todoForm: FormGroup;

  constructor(
    public movieService: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieList = this.movieService.getMovieList();

    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: ['', [Validators.required]],
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: [
        '',
        [
          Validators.required,
          Validators.minLength(40),
          Validators.maxLength(60),
        ],
      ],
      trailer: ['', [Validators.required]],
    });
  }

  addMovie() {
    if (this.movieForm.valid) {
      let newMovie: NewMovie = this.movieForm.value;
      this.movieService.addMovie(newMovie).then(() => {
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get task() {
    return this.todoForm.get('task');
  }
}
