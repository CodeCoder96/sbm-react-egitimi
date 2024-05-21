import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
  

  return (
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
  );
}

export default Products;
