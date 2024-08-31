import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const Decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const Delete = () => {
    dispatch({
      type: "DELETE",
    });
  };
  return (
    <div className="App">
      <div className="box">
        <h1 className="title">Hello, Redux!</h1>
        <h1 className="hndle-title">{counter}</h1>
        <div className="cont">
          <button className="inc-btn" onClick={Increment}>
            Increment
          </button>
          <button className="dec-btn" onClick={Decrement}>
            Decrement
          </button>
          <button className="delete-btn" onClick={Delete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
