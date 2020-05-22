import { Component, OnInit } from '@angular/core';

class Row{
  id: number;
  number: number;
  price: number;
  places: Array<Place>;
  constructor(id: number, number: number, price: number, places: Array<Place>){
    this.id = id;
    this.number = number;
    this.price = price;
    this.places = places;
  }
}
class Place{
  id: number;
  number: number;
  price: number;
  isSales: boolean;
  idSelected: boolean;
  
  constructor(id: number, number: number, price: number, isSales: boolean = false, idSelected: boolean = false){
    this.id = id;
    this.number = number;
    this.price = price;
    this.isSales = isSales;
    this.idSelected = idSelected;
  }
}

class SelectedPlace{
  rowNumber: number;
  place: Place;
  constructor(rowNumber: number, place: Place){
    this.rowNumber = rowNumber;
    this.place = place;
  }
}

class SelectedPlaces{
  totalPrice: number = 0;
  // countPlace: number = 0;
  places: Array<SelectedPlace>;
  constructor(places: Array<SelectedPlace>){
    this.places = places;
  }
  
  getTotalPrice(){
    this.totalPrice = 0;
    this.places.forEach(el => this.totalPrice += el.place.price)
    return this.totalPrice;
  }

  removePlace(place: Place){
    let index = this.places.findIndex(el => el.place.id === place.id);
    if(index !== -1){
      this.places.splice(index,1);
      place.idSelected = false;
    }
  }
  addPlace(selectedPlace: SelectedPlace){
    if(this.places.length <= 9){
      this.places.push(selectedPlace);
      selectedPlace.place.idSelected = true;
    }
    else
      throw new Error('Ви досягли максимальної кількісті квитків за ону покупку! Максимум 10 квитків.');
  }
}

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  movie = { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg' }

  sessionPlace2 = [
    {
      row: 1, rowPrice: 60, rowPlace: [
        { id: 1,place: 1, sales: false },
        { id: 2,place: 2, sales: false },
        { id: 3,place: 3, sales: false },
        { id: 4,place: 4, sales: false },
        { id: 5,place: 5, sales: true },
        { id: 6,place: 6, sales: false },
        { id: 7,place: 7, sales: false },
        { id: 8,place: 8, sales: true },
        { id: 9,place: 9, sales: false },
        { id: 10,place: 10, sales: false },
        { id: 11,place: 11, sales: false },
        { id: 12,place: 12, sales: false },
        { id: 13,place: 13, sales: false },
        { id: 14,place: 14, sales: false },
        { id: 15,place: 15, sales: false }
      ]
    },
    {
      row: 2, rowPrice: 60, rowPlace: [
        { id: 16, place: 1, sales: false },
        { id: 17, place: 2, sales: false },
        { id: 18, place: 3, sales: true },
        { id: 19, place: 4, sales: true },
        { id: 20, place: 5, sales: false },
        { id: 21, place: 6, sales: true },
        { id: 22, place: 7, sales: false },
        { id: 23, place: 8, sales: false },
        { id: 24, place: 9, sales: false },
        { id: 25, place: 10, sales: false },
        { id: 26, place: 11, sales: false },
        { id: 27, place: 12, sales: false },
        { id: 28, place: 13, sales: false },
        { id: 29, place: 14, sales: false },
        { id: 30, place: 15, sales: false }
      ],
    },
    {
      row: 4, rowPrice: 70, rowPlace: [
        { id: 31, place: 1, sales: false },
        { id: 32, place: 2, sales: false },
        { id: 33, place: 3, sales: false },
        { id: 34, place: 4, sales: false },
        { id: 35, place: 5, sales: false },
        { id: 36, place: 6, sales: true },
        { id: 37, place: 7, sales: true },
        { id: 38, place: 8, sales: false },
        { id: 39, place: 9, sales: true },
        { id: 40, place: 10, sales: true },
        { id: 41, place: 11, sales: false },
        { id: 42, place: 12, sales: false },
        { id: 43, place: 13, sales: false },
        { id: 44, place: 14, sales: false },
        { id: 45, place: 15, sales: false }
      ],
    },
    {
      row: 4, rowPrice: 70, rowPlace: [
        { id: 46, place: 1, sales: false },
        { id: 47, place: 2, sales: false },
        { id: 48, place: 3, sales: false },
        { id: 49, place: 4, sales: false },
        { id: 50, place: 5, sales: false },
        { id: 51, place: 6, sales: false },
        { id: 52, place: 7, sales: false },
        { id: 53, place: 8, sales: false },
        { id: 54, place: 9, sales: false },
        { id: 55, place: 10, sales: false },
        { id: 56, place: 11, sales: false },
        { id: 57, place: 12, sales: false },
        { id: 58, place: 13, sales: false },
        { id: 59, place: 14, sales: false },
        { id: 60, place: 15, sales: false }
      ],
    },
    {
      row: 5, rowPrice: 80, rowPlace: [
        { id: 61, place: 1, sales: false },
        { id: 62, place: 2, sales: false },
        { id: 63, place: 3, sales: false },
        { id: 64, place: 4, sales: false },
        { id: 65, place: 5, sales: false },
        { id: 66, place: 6, sales: false },
        { id: 67, place: 7, sales: false },
        { id: 68, place: 8, sales: false },
        { id: 69, place: 9, sales: false },
        { id: 70, place: 10, sales: false },
        { id: 71, place: 11, sales: false },
        { id: 72, place: 12, sales: false },
        { id: 73, place: 13, sales: false },
        { id: 74, place: 14, sales: false },
        { id: 75, place: 15, sales: false }
      ],
    },
    {
      row: 6, rowPrice: 80, rowPlace: [
        { id : 76, place: 1, sales: false },
        { id : 77, place: 2, sales: false },
        { id : 78, place: 3, sales: false },
        { id : 79, place: 4, sales: false },
        { id : 80, place: 5, sales: false },
        { id : 81, place: 6, sales: false },
        { id : 82, place: 7, sales: false },
        { id : 83, place: 8, sales: false },
        { id : 84, place: 9, sales: false },
        { id : 85, place: 10, sales: false },
        { id : 86, place: 11, sales: false },
        { id : 87, place: 12, sales: false },
        { id : 88, place: 13, sales: false },
        { id : 89, place: 14, sales: false },
        { id : 90, place: 15, sales: false }
      ],
    }
  ]
  sessionPlace : Array<Row> = [
    new Row(1,1,60,[
      new Place(1,1,60),
      new Place(2,2,60),
      new Place(3,3,60),
      new Place(4,4,60),
      new Place(5,5,60,true),
      new Place(6,6,60,true),
      new Place(7,7,60,true),
      new Place(8,8,60),
      new Place(9,9,60),
      new Place(10,10,60),
      new Place(11,11,60),
      new Place(12,12,60),
      new Place(13,13,60),
      new Place(14,14,60),
      new Place(15,15,60)
    ]),
    new Row(2,2,60,[
      new Place(16,1,60),
      new Place(17,2,60),
      new Place(18,3,60),
      new Place(19,4,60),
      new Place(20,5,60),
      new Place(21,6,60),
      new Place(22,7,60),
      new Place(23,8,60),
      new Place(24,9,60),
      new Place(25,10,60),
      new Place(26,11,60),
      new Place(27,12,60),
      new Place(28,13,60),
      new Place(29,14,60),
      new Place(30,15,60)
    ]),
    new Row(3,3,70,[
      new Place(31,1,70),
      new Place(32,2,70),
      new Place(33,3,70),
      new Place(34,4,70),
      new Place(35,5,70),
      new Place(36,6,70),
      new Place(37,7,70),
      new Place(38,8,70),
      new Place(39,9,70),
      new Place(40,10,70),
      new Place(41,11,70),
      new Place(42,12,70),
      new Place(43,13,70),
      new Place(44,14,70),
      new Place(45,15,70)
    ]),
    new Row(4,4,70,[
      new Place(46,1,70),
      new Place(47,2,70),
      new Place(48,3,70),
      new Place(49,4,70),
      new Place(50,5,70),
      new Place(51,6,70),
      new Place(52,7,70),
      new Place(53,8,70),
      new Place(54,9,70),
      new Place(55,10,70),
      new Place(56,11,70),
      new Place(57,12,70),
      new Place(58,13,70),
      new Place(59,14,70),
      new Place(60,15,70)
    ]),
    new Row(5,5,80,[
      new Place(61,1,80),
      new Place(62,2,80),
      new Place(63,3,80),
      new Place(64,4,80),
      new Place(65,5,80),
      new Place(66,6,80),
      new Place(67,7,80),
      new Place(68,8,80),
      new Place(69,9,80),
      new Place(70,10,80),
      new Place(71,11,80),
      new Place(72,12,80),
      new Place(73,13,80),
      new Place(74,14,80),
      new Place(75,15,80)
    ]),
  ]

  selectedPlaces :  SelectedPlaces = new SelectedPlaces([]);

  isNextStep: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  toBackStep(){
    this.isNextStep = false;
  }
  toNextStep(){
    if(this.selectedPlaces && this.selectedPlaces.places.length && !this.isNextStep){
      this.isNextStep = true;
      // if(!this.isNextStep){
      //   this.isNextStep = true;
      // }
      // else{
      //   this.isNextStep = false;
      // }
    }
    
  }

  togglePlase(selectedPlace: SelectedPlace){
    if(!selectedPlace.place.isSales){
      if(this.selectedPlaces.places.length > 0 && this.selectedPlaces.places.findIndex(el => el.place.id === selectedPlace.place.id) != -1)
        this.selectedPlaces.removePlace(selectedPlace.place)
      else
        this.selectedPlaces.addPlace(selectedPlace)
    }
  }
  onRemoveSelectedPlace(place: Place){
    this.selectedPlaces.removePlace(place);
  }
}
