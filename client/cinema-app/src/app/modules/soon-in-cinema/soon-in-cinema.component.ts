import { Component } from '@angular/core';

@Component({
  selector: 'app-soon-in-cinema',
  templateUrl: './soon-in-cinema.component.html',
  styleUrls: ['./soon-in-cinema.component.scss']
})
export class SoonInCinemaComponent  {

  soonMovies = [
    { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg', date: '01 вересня 2020р.' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/9c/5d/9c5d20945ab1509a7bd67232c261fa41.jpeg', date: '01 вересня 2020р.' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/58/35/583593441a8af5accb5585d608ca003b.jpeg', date: '01 вересня 2020р.' },
    { name: 'test2', imgUrl: 'https://multiplex.ua/images/ec/3b/ec3b1e5e537bbd8d109c9b750131c063.jpeg', date: '01 вересня 2020р.'},
    { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg', date: '01 вересня 2020р.' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/9c/5d/9c5d20945ab1509a7bd67232c261fa41.jpeg', date: '01 вересня 2020р.' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/58/35/583593441a8af5accb5585d608ca003b.jpeg', date: '01 вересня 2020р.' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/ec/3b/ec3b1e5e537bbd8d109c9b750131c063.jpeg', date: '01 вересня 2020р.' }
  ];

  movie1 = { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg' }

  constructor() { }

  getBackgroundMovie(img): string{
    // return `background: url(${img}) no-repeat;`
    return img
  }
}
