import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";
import AddNewProduct from "./AddNewProduct";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState(productsData);

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
