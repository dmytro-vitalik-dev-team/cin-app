import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  movie = { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg' }

  sessionPlace = [
    {
      row: 1, rowPrice: 60, rowPlace: [
        { place: 1, blocked: false },
        { place: 2, blocked: false },
        { place: 3, blocked: false },
        { place: 4, blocked: false },
        { place: 5, blocked: true },
        { place: 6, blocked: false },
        { place: 7, blocked: false },
        { place: 8, blocked: true },
        { place: 9, blocked: false },
        { place: 10, blocked: false },
        { place: 11, blocked: false },
        { place: 12, blocked: false },
        { place: 13, blocked: false },
        { place: 14, blocked: false },
        { place: 15, blocked: false }
      ]
    },
    {
      row: 2, rowPrice: 60, rowPlace: [
        { place: 1, blocked: false },
        { place: 2, blocked: false },
        { place: 3, blocked: true },
        { place: 4, blocked: true },
        { place: 5, blocked: false },
        { place: 6, blocked: true },
        { place: 7, blocked: false },
        { place: 8, blocked: false },
        { place: 9, blocked: false },
        { place: 10, blocked: false },
        { place: 11, blocked: false },
        { place: 12, blocked: false },
        { place: 13, blocked: false },
        { place: 14, blocked: false },
        { place: 15, blocked: false }
      ],
    },
    {
      row: 4, rowPrice: 70, rowPlace: [
        { place: 1, blocked: false },
        { place: 2, blocked: false },
        { place: 3, blocked: false },
        { place: 4, blocked: false },
        { place: 5, blocked: false },
        { place: 6, blocked: true },
        { place: 7, blocked: true },
        { place: 8, blocked: false },
        { place: 9, blocked: true },
        { place: 10, blocked: true },
        { place: 11, blocked: false },
        { place: 12, blocked: false },
        { place: 13, blocked: false },
        { place: 14, blocked: false },
        { place: 15, blocked: false }
      ],
    },
    {
      row: 4, rowPrice: 70, rowPlace: [
        { place: 1, blocked: false },
        { place: 2, blocked: false },
        { place: 3, blocked: false },
        { place: 4, blocked: false },
        { place: 5, blocked: false },
        { place: 6, blocked: false },
        { place: 7, blocked: false },
        { place: 8, blocked: false },
        { place: 9, blocked: false },
        { place: 10, blocked: false },
        { place: 11, blocked: false },
        { place: 12, blocked: false },
        { place: 13, blocked: false },
        { place: 14, blocked: false },
        { place: 15, blocked: false }
      ],
    },
    {
      row: 5, rowPrice: 80, rowPlace: [
        { place: 1, blocked: false },
        { place: 2, blocked: false },
        { place: 3, blocked: false },
        { place: 4, blocked: false },
        { place: 5, blocked: false },
        { place: 6, blocked: false },
        { place: 7, blocked: false },
        { place: 8, blocked: false },
        { place: 9, blocked: false },
        { place: 10, blocked: false },
        { place: 11, blocked: false },
        { place: 12, blocked: false },
        { place: 13, blocked: false },
        { place: 14, blocked: false },
        { place: 15, blocked: false }
      ],
    },
    {
      row: 6, rowPrice: 80, rowPlace: [
        { place: 1, blocked: false },
        { place: 2, blocked: false },
        { place: 3, blocked: false },
        { place: 4, blocked: false },
        { place: 5, blocked: false },
        { place: 6, blocked: false },
        { place: 7, blocked: false },
        { place: 8, blocked: false },
        { place: 9, blocked: false },
        { place: 10, blocked: false },
        { place: 11, blocked: false },
        { place: 12, blocked: false },
        { place: 13, blocked: false },
        { place: 14, blocked: false },
        { place: 15, blocked: false }
      ],
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
