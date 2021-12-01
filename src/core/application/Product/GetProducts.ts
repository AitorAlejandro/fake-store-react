import type { Product, ProductApi } from "../../entities";

export const GetProducts = (productRepository: ProductApi) => (): Promise<Product[]>  => {
  return productRepository.getProducts();
};
