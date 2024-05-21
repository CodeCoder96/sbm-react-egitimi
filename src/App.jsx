// import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <Button type="primary" size="xl">
        Ekle
      </Button>
      <Button type="success" size="lg">
        Güncelle
      </Button>
      <Button type="danger" size="sm">
        <strong>Delete</strong>
      </Button>
      {/* <Products /> */}
    </div>
  );
}

export default App;
