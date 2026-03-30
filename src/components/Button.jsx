import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      className="px-5 p-2 bg-olive-600 m-1 rounded-md text-white text-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
