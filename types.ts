export type Language = 'uz' | 'ru' | 'en';
export enum MainCategory { LAPTOPS = 'laptops', PC = 'pc', ACCESSORIES = 'accessories' }
export type SubCategory = 'monitor' | 'case' | 'motherboard' | 'ups' | 'ram' | 'psu' | 'cooler' | 'gpu' | 'cables' | 'stands' | 'bags' | 'other' | 'all';

export interface Product {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}