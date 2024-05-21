import "./ProductItem.css";

function ProductItem() {
  const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Çanta";
  const price = 500;
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={image}
          width={200}
          alt="product image"
        />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
