import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("Ahmet");
  // let fullName = "Ahmet"; // Mehmet

  function handleChangeName() {
    // fullName = "Mehmet";
    // if (fullName === "Ahmet") {
    //   setFullName("Mehmet");
    // } else {
    //   setFullName("Ahmet");
    // }
    
    // ternary ?(true) :(false)
    setFullName(fullName === "Ahmet" ? "Mehmet" : "Ahmet");
    // console.log(fullName);
  }

  return (
    <div className="app">
      <p>{fullName}</p>
      <button onClick={handleChangeName}>Click!</button>
    </div>
  );
}

export default App;
