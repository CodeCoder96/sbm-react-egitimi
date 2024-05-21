import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";
import AddNewProduct from "./AddNewProduct";

function Products() {
  return (
    <div className="products-wrapper">
      <AddNewProduct />
      <div className="products">
        {productsData.map((product) => (
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
