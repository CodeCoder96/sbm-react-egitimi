const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
        <h1>ProductDetailsPage</h1>
        <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" src="https://via.placeholder.com/500" alt="Ürün Resmi" />
            </div>
            <div className="col-md-6">
                <h2>Ürün Adı</h2>
                <p className="text-info">Kategori: Elektronik</p>
                <h4 className="text-primary">₺999,99</h4>
                <p>Bu ürün, yüksek kaliteli malzemelerden üretilmiştir ve en son teknoloji ile donatılmıştır. Modern tasarımı ve üstün performansı ile dikkat çeker.</p>
                <ul className="list-unstyled">
                    <li><strong>Özellik 1:</strong> Yüksek çözünürlüklü ekran</li>
                    <li><strong>Özellik 2:</strong> Uzun pil ömrü</li>
                    <li><strong>Özellik 3:</strong> Hızlı şarj özelliği</li>
                </ul>
                <div className="mt-3">
                    <button className="btn btn-primary">Sepete Ekle</button>
                    <button className="btn btn-secondary ms-2">Favorilere Ekle</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetailsPage