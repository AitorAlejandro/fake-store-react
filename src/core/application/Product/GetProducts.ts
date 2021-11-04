import type { Product } from "../../entities";
import type { ProductRepository } from "../../entities";

export async function GetProducts(
  productRepository: ProductRepository
): Promise<Product[]> {
  return productRepository.getProducts();
}
