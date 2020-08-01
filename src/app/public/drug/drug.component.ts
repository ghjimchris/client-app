import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  @Input('init')
  drug = {
    img: '',
    des: '',
    price: '',
    id: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  showDrugDetails(): void {
    //change route or navigate to the drugs details page
    console.log('clicked id is:', this.drug.id)
  }
}
