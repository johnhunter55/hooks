import { Button } from "./Button.jsx";
import { useCounter } from "./Hooks.jsx";

export function Counter() {
  const { countValue, increase, decrease, reset, amount } = useCounter();

  return (
    <div className="flex flex-col gap-3 rounded-lg border p-6 shadow-md">
      <div className="text-xl font-bold">Counter count: {countValue || 0}</div>

      <div className="flex gap-2">
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
        <Button onClick={reset}>Reset</Button>
      </div>

      <input
        type="number"
        value={countValue}
        onChange={(event) => amount(event.target.value)}
        className="mt-2 rounded border border-gray-300 p-2"
      />
    </div>
  );
}
