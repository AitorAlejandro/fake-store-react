import * as React from "react";
import { GetProducts, HttpProductRepository, Product } from "../../../core";

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    GetProducts(HttpProductRepository)
      .then(setProducts)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Fake Store Home</h1>
      <ul>
        {products.map((product) => (
          <li>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
            <img alt="" src={product.image} />
          </li>
        ))}
      </ul>
    </>
  );
};
