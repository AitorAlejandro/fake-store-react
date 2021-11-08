import { ProductApi } from "../../entities";
import { getProducts } from "./HttpGetProducts";

export const HttpProductRepository: ProductApi = {
  getProducts,
};
