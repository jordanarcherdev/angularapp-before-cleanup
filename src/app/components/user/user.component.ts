import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  // styles: [`
  //   h2{
  //   color: blue;
  // }
  // `]
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  //Properties
  user: User;

  //Methods
  constructor() {

}

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address:  {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
      }
    }
  }
}
