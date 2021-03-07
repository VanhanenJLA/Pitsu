import { Size } from 'src/common/types';
import { Injectable } from '@angular/core';
import db from './../../db.json';
import { Product } from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }
}

const parseCategory = (category: any) => {
  if (!category)
    return

  const products = category.products
  if (!products)
    return

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product) {
      product.hasGarlic = false;
      product.size = 'Medium'  
    }
  }
  return category;
}


export const abuseDb = () => {

  const names = db.map(c => c.productCategoryName)

  const pizzas = db.find(c => c.productCategoryName === 'Pizzat')
  const monsters = db.find(c => c.productCategoryName === 'Monsterit')
  const drinks = db.find(c => c.productCategoryName === 'Juomat')
  const kotzones = db.find(c => c.productCategoryName === 'Kotzonet')
  const dips = db.find(c => c.productCategoryName === 'Dipit')
  const dippables = db.find(c => c.productCategoryName === 'Dipattavat')
  const snacks = db.find(c => c.productCategoryName === 'Naposteltavat')
  const icecreams = db.find(c => c.productCategoryName === 'Jäätelöt')
  const rolls = db.find(c => c.productCategoryName === 'Rullat')
  const plankpizzas = db.find(c => c.productCategoryName === 'Lankkupizzat')

  const categories = [
    parseCategory(pizzas),
    parseCategory(monsters),
    parseCategory(kotzones),
    parseCategory(plankpizzas),
    parseCategory(rolls),
    parseCategory(dippables),
    parseCategory(dips),
    parseCategory(drinks),
    parseCategory(snacks),
    parseCategory(icecreams),
  ]
  return categories;
}