import { useState, useEffect } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }

  return { toggle, handleToggle };
}

export function useCounter() {
  const [countValue, setCountValue] = useState(() => {
    const saved = localStorage.getItem("my-counter-value");

    return saved !== null ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("my-counter-value", JSON.stringify(countValue));
  }, [countValue]);

  function increase() {
    setCountValue((prev) => Number(prev) + 1);
  }

  function decrease() {
    setCountValue((prev) => Number(prev) - 1);
  }

  function reset() {
    setCountValue(0);
  }

  function amount(value) {
    if (value === "") {
      setCountValue("");
      return;
    }
    setCountValue(Number(value));
  }

  return { countValue, increase, decrease, reset, amount };
}

export const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
