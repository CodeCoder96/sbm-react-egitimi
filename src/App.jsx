import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app container">
      <Header />
      <main className=" py-4">
        <Products />
      </main>
    </div>
  );
}

export default App;
