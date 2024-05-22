import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {

  return (
    <div className="app container position-relative">
      <Header />
      <main className="pt-5">
        <Products  />
      </main>
    </div>
  );
}

export default App;
