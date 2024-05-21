import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Çanta";
  const price = 500;

  const fullName = "Emin Başbayan";

  return (
    <div className="products">
      <ProductItem name={fullName} image={image} title={title} price={price} />
    </div>
  );
}

export default Products;
