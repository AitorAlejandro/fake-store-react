import { ProductRepository } from "../../entities";
import { getProducts } from "./HttpGetProducts";

export const HttpProductRepository: ProductRepository = {
    getProducts,
};
