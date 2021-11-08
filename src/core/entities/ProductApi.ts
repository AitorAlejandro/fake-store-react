import type { ProductList } from "./";

export interface ProductApi {
  getProducts(): Promise<ProductList>;
}
