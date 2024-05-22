import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
// import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import "./Products.css";

function Products({ setCartItems }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("products component çalıştı!");

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    setProducts([]);
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 1000);
  }, []);

  return (
    <div className="products-wrapper">
      {/* <AddNewProduct setProducts={setProducts} /> */}
      {isLoading && <Spinner />}
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  setCartItems: PropTypes.func,
};

export default Products;
