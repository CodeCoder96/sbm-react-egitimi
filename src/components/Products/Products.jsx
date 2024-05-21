import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";
import AddNewProduct from "./AddNewProduct";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            price={product.price}
            desc={product.description}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
