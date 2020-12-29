export interface BienModel {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  state: boolean;
  category: string;
  sale: boolean;
  createdAt: Date;
}
