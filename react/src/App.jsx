import { useEffect, useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import OnOf from "./components/OnOf";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    console.log(count);
  };

  const welcomeFun = () => {
    console.log("Welcome ");
  };

  useEffect(() => {
    // if (count === 5) {
    //   console.log("I am from useEffect");
    // }
    welcomeFun();
  }, []);

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <button onClick={handleClick} className="p-2 px-4 bg-blue-600 rounded-md">
        Add
      </button>
      <br />
      <span>{count}</span>
    </div>
  );
};

export default App;
