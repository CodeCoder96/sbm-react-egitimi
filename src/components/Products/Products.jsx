import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
// import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import "./Products.css";
import useFetchData from "../../hooks/FethData";

function Products() {
  const [products, setProducts] = useState([]);
  const { data, isLoading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }
  console.log(products);

  return (
    <div className="products-wrapper">
      {/* <AddNewProduct setProducts={setProducts} /> */}
      {isLoading && <Spinner />}
      {error && <div>Error loading data!</div>}
      <div className="products">
        {products?.map((product) => (
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
