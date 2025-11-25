import { useState } from "react";
import "./App.css";

function App() {
  const [bcolor, setColor] = useState("yellow");


  return (
    <div
      className="backcolor flex items-center justify-center min-h-screen"
      style={{ background: bcolor }}
    >
      <button onClick={()=>setColor("pink")} className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800 m-5 ">
        pink
      </button>
      <button onClick={()=>setColor("red")} className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800 m-5 ">
        red
      </button>
      <button onClick={()=>setColor("purple")} className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800  m-5">
        purple
      </button>
      <button onClick={()=>setColor("blue")} className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800  m-5">
        blue
      </button>
      <button onClick={()=>setColor("green")} className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800  m-5">
        green
      </button>
      <button  onClick={()=>setColor("black")}  className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800  m-5">
        black
      </button>
    </div>
  );
}

export default App;
