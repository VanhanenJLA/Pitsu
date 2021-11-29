import { Component, OnInit } from '@angular/core';
import { abuseDb } from 'src/common/data.service';
import { Pizza, Size } from 'src/common/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  categories = abuseDb();
  selectedCategory = this.categories[0];

  sizes: Size[] = [
    'Medium',
    'Large',
    'Extra Large'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isActive(category: any): string {
   return this.selectedCategory === category ? 'active' : ''
  }
  
}

let perfetta: Pizza = {
  name: "perfetta",
  description: "Kokoa oma pitsasi",
  price: 10.90,
  menuimagepath: "https://mob-cdn.azureedge.net/kuvat/tuotteet/pizza-perfetta-540x380.jpg",
  size: 'Medium',
  hasGarlic: false,
}









