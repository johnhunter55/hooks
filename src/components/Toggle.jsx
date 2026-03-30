import { useState } from "react";
import { useToggle } from "./Hooks";
import { Button } from "./Button";

export function Toggle() {
  const { toggle, handleToggle } = useToggle();

  return (
    <>
      <h1 className="text-2xl">{toggle ? "Hello" : "Goodbye"} custom Hooks</h1>
      <Button onClick={handleToggle}>Toogle Greeting</Button>
    </>
  );
}
