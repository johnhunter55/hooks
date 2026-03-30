import { Button } from "./Button.jsx";
import { useToggle } from "./Hooks";
import { Notes } from "./Notes.jsx";

export function Modal() {
  const { toggle, handleToggle } = useToggle();

  return (
    <>
      <Button onClick={handleToggle}>Toggle Modal</Button>
      {toggle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Hello</h2>
              <button
                onClick={handleToggle}
                className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-gray-600">
              <p>This is the modal content!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
