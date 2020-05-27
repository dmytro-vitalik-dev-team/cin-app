import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bunner',
  templateUrl: './bunner.component.html',
  styleUrls: ['./bunner.component.scss']
})
export class BunnerComponent {
  @Input() movie: any;
  
  constructor(private router: Router) { }

  getSession(id: number): void {
    this.router.navigate([`/movie/session/${id}`]);
  }

}
