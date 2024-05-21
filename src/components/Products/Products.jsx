import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <ProductItem
        image={productsData[0].image}
        title={productsData[0].title}
        price={productsData[0].price}
        desc={productsData[0].description}
      />
      <ProductItem
        image={productsData[1].image}
        title={productsData[1].title}
        price={productsData[1].price}
        desc={productsData[1].description}
      />
      <ProductItem
        image={productsData[2].image}
        title={productsData[2].title}
        price={productsData[2].price}
        desc={productsData[2].description}
      />
    </div>
  );
}

export default Products;
