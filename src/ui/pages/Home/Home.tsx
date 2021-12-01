import * as React from "react";
import { Product } from "../../../core/entities";
import { ProductApplication } from "../../../core/application";
import { HomeLayout } from "../../layouts";
import { ProductList } from "../../components";

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    ProductApplication.getProducts()
      .then((products: Product[]) => setProducts(products))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <HomeLayout>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div>Loading...</div>
      )}
    </HomeLayout>
  );
};

Home.displayName = "Home";
