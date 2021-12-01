import * as React from "react";
import { Product } from "../../../core/entities";

import "./ProductList.css";

export interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-list__item">
          <img alt="" src={product.image} />
          <div className="product-list__item-content">
            <div className="product-list__item-title">{product.title}</div>
            <div>{product.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

ProductList.displayName = "ProductList";
