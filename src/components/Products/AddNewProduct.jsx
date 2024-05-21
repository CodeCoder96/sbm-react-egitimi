import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";
import ProductInput from "./ProductInput";

const productInputs = [
  {
    label: "Title",
    type: "text",
    placeholder: "Ürün ismi giriniz.",
    name: "title",
  },
  {
    label: "Image",
    type: "text",
    placeholder: "Ürün görseli giriniz.",
    name: "image",
  },
  {
    label: "Description",
    type: "text",
    placeholder: "Ürün açıklaması giriniz.",
    name: "description",
  },
  {
    label: "Price",
    type: "number",
    placeholder: "Ürün fiyatı giriniz.",
    name: "price",
  },
];

function AddNewProduct() {
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  }

  console.log(productData);

  return (
    <form className="product-form">
      {productInputs.map((input, index) => (
        <ProductInput key={index} input={input} handleChange={handleChange} />
      ))}

      <Button>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddNewProduct;
