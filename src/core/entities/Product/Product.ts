import type {Rating} from "..";
import type {Url} from "..";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: Url;
  rating: Rating;
};