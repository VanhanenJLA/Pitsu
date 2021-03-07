
type Pizza = Product & {
  hasGarlic: boolean;
}
type Monster = Product & Pizza & {
}

type Plank = Product & {
  hasGarlic: boolean;
}
type IceCream = Product & {
}

type Dippable = Product & {
}
type Dip = Product & {
}
type Roll = Product & {
}
type Drink = Product & {
}

type Product = {
  name: string;
  description: string;
  price: number;
  menuimagepath: string;
  size: Size;
}

type Size =
  'Medium' |
  'Large' |
  'Extra Large'

export { Size, Dip, Dippable, Drink, IceCream, Monster, Pizza, Plank, Product, Roll }