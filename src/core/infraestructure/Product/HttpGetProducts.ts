import type { ProductList } from "../../entities";
import { FAKE_API_URL } from "../infraestructure.constants";

export async function getProducts(): Promise<ProductList> {
  const headers: Headers = new Headers({
    "Content-Type": "application/json",
  });
  const request: Request = new Request(`${FAKE_API_URL}/products`);
  const response: Response = await fetch(request, { method: "GET", headers });
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
