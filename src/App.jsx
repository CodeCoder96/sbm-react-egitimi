import { useEffect, useState } from "react";
import Products from "./components/Products/Products";

function App() {
  const [toggleText, setToggleText] = useState(false);
  const [counter, setCounter] = useState(0);
  
  // component ilk yüklendiğinde çalışsın
  useEffect(() => {
    console.log("component ilk yüklendiğinde çalıştı!");
  }, []);

  // component güncellendiğinde çalışsın
  useEffect(() => {
    console.log("component güncellendiğinde çalıştı!");
  }, [toggleText]);

  console.log("re-rendered!");

  return (
    <div className="app">
      <button onClick={() => setToggleText(!toggleText)}>Toggle</button>
      <p
        className="text-white"
        style={{
          color: "white",
        }}
      >
        {toggleText && "Text"}
      </p>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <p
        className="text-white"
        style={{
          color: "white",
        }}
      >
        {counter}
      </p>
      <Products />
    </div>
  );
}

export default App;
