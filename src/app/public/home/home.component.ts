import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drugs = [
    {
      img: '/assets/images/drugs1.jpeg',
      des: 'Some powerful drugs',
      price: 'GHc 20.00',
      id: 1
    }, {
      img: '/assets/images/drugs2.jpeg',
      des: 'Dragon Drugs',
      price: 'GHc 10.00',
      id: 2
    }, {
      img: '/assets/images/drugs3.jpeg',
      des: 'Para',
      price: 'GHc 1.00',
      id: 3
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
