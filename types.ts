export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}