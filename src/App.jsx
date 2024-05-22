import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app container">
      <Header cartItems={cartItems} />
      <main className=" py-4">
        <Products setCartItems={setCartItems} />
      </main>
    </div>
  );
}

export default App;
