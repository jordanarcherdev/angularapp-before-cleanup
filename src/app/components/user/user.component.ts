import { Component } from '@angular/core';

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

export class UserComponent {
// Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple : [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  //Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;

    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }

    this.foo = 1;
    this.hasKids = true;
    this.numberArray = [1,2,3];
    this.stringArray = ['Hello ', 'World '];
    this.mixedArray = [true, undefined, 'hello'];
    this.myTuple = ['hello',1,true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
    console.log(this.addNumbers(2,3));
}

  addNumbers(num1:number, num2:number):number {
    return num1 + num2;
  }

}
