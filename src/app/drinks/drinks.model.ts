export interface Drinks {
  category: string;
  products: Drink[];
}

export interface Drink {
  name: string;
  amount?: string;
  price?: number;
  country?: string;
}
