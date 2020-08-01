import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('init')
  user = {
    name: '',
    phone: '',
    username: '',
    email: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  showUsersDetails() {
  }

}
