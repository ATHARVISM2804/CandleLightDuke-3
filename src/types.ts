export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  fragranceNotes?: string[];
  ingredients?: string[];
  burnTime?: string;
  weight?: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Fragrance {
  id: string;
  name: string;
  description: string;
  mood: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  image: string;
}

export interface CustomOrder {
  fragrance: string;
  size: string;
  container: string;
  label: string;
  quantity: number;
  specialInstructions: string;
}