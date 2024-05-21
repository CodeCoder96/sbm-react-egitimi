import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import ProductInput from "./ProductInput";
import "./AddNewProduct.css";
import Modal from "../UI/Modal";

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

const initialValues = {
  title: "",
  image: "",
  description: "",
  price: "",
};

function AddNewProduct(props) {
  const [productData, setProductData] = useState(initialValues);
  const [isShowModal, setIsShowModal] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(productData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setIsShowModal(true);
      return;
    }
    const newProduct = {
      id: Math.random(),
      ...productData,
      price: Number(productData.price),
    };

    props.setProducts((products) => [newProduct, ...products]);

    // form verilerini sıfırlama
    setProductData(initialValues);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <Modal
        title={"Form Hatası!"}
        description={"Inputlar boş geçilemez!"}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          input={input}
          handleChange={handleChange}
          value={productData[input.name]}
        />
      ))}

      <Button>Yeni Ürün Ekle</Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  setProducts: PropTypes.func,
};

export default AddNewProduct;
