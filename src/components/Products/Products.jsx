import ProductItem from "./ProductItem";
import "./Products.css";
import AddNewProduct from "./AddNewProduct";
import { useState } from "react";
import Button from "../UI/Button";

function Products() {
  const [products, setProducts] = useState([]);

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <Button onClick={fetchProducts} type="success" className="mt-3">
        Fetch Products
      </Button>
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
