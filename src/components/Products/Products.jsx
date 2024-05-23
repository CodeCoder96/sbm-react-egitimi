import { useEffect, useState } from "react";
import { ProductItem, NewItem } from "./ProductItem";
// import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import "./Products.css";
import useFetchData from "../../hooks/FethData";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";

function Products() {
  // const [products, setProducts] = useState([]);
  const { products, status, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // const { data, isLoading, error } = useFetchData(
  //   "https://fakestoreapi.com/products"
  // );

  // useEffect(() => {
  //   if (data) {
  //     setProducts(data);
  //   }
  // }, [data]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    // setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      {/* <AddNewProduct setProducts={setProducts} /> */}
      <NewItem />
      {status === "loading" && <Spinner />}
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
