import { useSelector } from "react-redux";

function Counter() {
  const state = useSelector((state)=> state.counter);

  return (
    <div className="counter">
      <button onClick={()=> {}}>+</button>
      <strong>{state.count}</strong>
      <button onClick={()=> {}}>-</button>
    </div>
  );
}

export default Counter;
