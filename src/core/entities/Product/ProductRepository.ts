import { Product } from "..";

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
}
