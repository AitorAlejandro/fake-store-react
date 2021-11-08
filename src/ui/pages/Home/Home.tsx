import * as React from "react";
import { ProductList } from "../../../core/entities";
import { ProductApplication } from "../../../core/application";

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState<ProductList>([]);

  React.useEffect(() => {
    ProductApplication.getProducts()
      .then((products: ProductList) => setProducts(products))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Fake Store Home</h1>
      {products.length > 0 ? (
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
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
