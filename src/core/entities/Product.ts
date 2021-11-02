import type {Rating} from "../entities";
import type {Url} from "../entities";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: Url;
  rating: Rating;
};