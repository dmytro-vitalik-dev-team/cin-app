import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-bunner',
  templateUrl: './movie-bunner.component.html',
  styleUrls: ['./movie-bunner.component.scss']
})
export class MovieBunnerComponent {
  @Input() movie: any;

  constructor(private router: Router) {}

  getSession(id: number): void {
    this.router.navigate([`/movie/session/${id}`]);
  }
}
