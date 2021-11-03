import type { Product } from "../entities";
import { API_ROOT } from "./infraestructure.constants";

export async function getProducts(): Promise<Product[]> {
  const headers: Headers = new Headers({
    "Content-Type": "application/json",
  });
  const request: Request = new Request(`${API_ROOT}/products`);
  const response: Response = await fetch(request, { method: "GET", headers });
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
