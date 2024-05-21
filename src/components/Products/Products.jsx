import { useState } from "react";
import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
  const [title, setTitle] = useState("Product Title");

  return (
    <div className="products">
      {productsData.map((product) => (
        <ProductItem
          key={product.id}
          image={product.image}
          price={product.price}
          desc={product.description}
          title={title}
          setTitle={setTitle}
        />
      ))}
    </div>
  );
}

export default Products;
