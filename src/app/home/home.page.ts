import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'Osama Shahzad',
    city: 'Jeddah',
    interests: ['Automobiles', ' Technology', ' TV Series']
  };

  constructor() {}

}
