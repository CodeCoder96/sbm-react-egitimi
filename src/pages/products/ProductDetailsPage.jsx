import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../components/UI/SkeletonLoader";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="product-details-page">
      <h1>ProductDetailsPage</h1>
      {product ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" src={product.image} alt="Ürün Resmi" />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p className="text-info">Kategori: {product.category}</p>
              <h4 className="text-primary">₺{product.price}</h4>
              <p>{product.description}</p>
              <ul className="list-unstyled">
                <li>
                  <strong>Özellik 1:</strong> Yüksek çözünürlüklü ekran
                </li>
                <li>
                  <strong>Özellik 2:</strong> Uzun pil ömrü
                </li>
                <li>
                  <strong>Özellik 3:</strong> Hızlı şarj özelliği
                </li>
              </ul>
              <div className="mt-3">
                <button className="btn btn-primary">Sepete Ekle</button>
                <button className="btn btn-secondary ms-2">
                  Favorilere Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
};

export default ProductDetailsPage;
