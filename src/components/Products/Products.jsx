import ProductItem from "./ProductItem";
import "./Products.css";
import AddNewProduct from "./AddNewProduct";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";

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
    }, 5000);
  }, []);

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <Button onClick={fetchProducts} type="success" className="mt-3">
        Fetch Products
      </Button>
      <br />
      <br />
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
