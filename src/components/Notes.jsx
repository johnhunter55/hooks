import { useState } from "react";
import { useLocalStorage } from "./Hooks";

export function Notes() {
  const [name, setName] = useLocalStorage("name", "");
  const [notes, setNotes] = useLocalStorage("notes", "");

  return (
    <div className="mx-auto mt-12 w-full max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl">
      <div className="mb-6 flex items-baseline gap-2 border-b border-gray-100 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
          Welcome back,
        </h2>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full bg-transparent text-3xl font-bold text-blue-600 placeholder:text-gray-300 focus:outline-none"
        />
      </div>

      <textarea
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Write your thoughts down..."
        className="h-50 w-full resize-none rounded-xl border-2 border-gray-100 bg-gray-50 p-5 text-lg leading-relaxed text-gray-700 placeholder:text-gray-400 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20"
      />

      <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
        <span>{notes.length} characters</span>
        <button
          onClick={() => setNotes("")}
          className="font-medium transition-colors hover:text-red-500"
        >
          Clear Notes
        </button>
      </div>
    </div>
  );
}
