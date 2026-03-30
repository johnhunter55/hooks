import { useState } from "react";
import "./App.css";
import { Toggle } from "./components/Toggle.jsx";
import { Modal } from "./components/Modal.jsx";
import { Button } from "./components/Button.jsx";
import { Counter } from "./components/Counter.jsx";
import { Notes } from "./components/Notes.jsx";

function App() {
  let [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
        <Toggle />
        <Modal />
        <Counter />
        <Notes />
      </div>
    </>
  );
}

export default App;
