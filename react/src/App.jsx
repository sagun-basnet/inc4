import { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import OnOf from "./components/OnOf";

const App = () => {
  const [count, setCount] = useState(false);
  const handleClick = (color) => {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    // <div className="flex justify-center items-center w-full flex-col">
    //   <button
    //     onqClick={() => {
    //       handleClick("red");
    //       setCount(true);
    //     }}
    //     className="p-2 px-4 bg-blue-600 rounded-md"
    //   >
    //     Add
    //   </button>
    //   <br />
    //   {count && <span>{count}</span>}
    // </div>
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      <OnOf />
    </>
  );
};

export default App;
