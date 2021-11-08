import type { ProductList, ProductApi } from "../../entities";

export const GetProducts = (productRepository: ProductApi) => (): Promise<ProductList>  => {
  return productRepository.getProducts();
};
