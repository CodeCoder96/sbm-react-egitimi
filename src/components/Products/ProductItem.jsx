import "./ProductItem.css";

function ProductItem(props) {
  console.log(props);
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={props.image}
          width={200}
          alt="product image"
        />
      </div>
      <div className="product-info">
        <strong>{props.title}</strong>
        <span>{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
