import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
// import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="products-wrapper pt-4">
      {/* <AddNewProduct setProducts={setProducts} /> */}
      {isLoading && <Spinner />}
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
