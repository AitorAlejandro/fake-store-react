import { GetProducts } from "./GetProducts";
import { HttpProductRepository } from "../../infraestructure/Product/HttpProductRepository";

export const ProductApplication = {
  getProducts: GetProducts(HttpProductRepository),
};
