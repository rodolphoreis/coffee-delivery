export default function CartItemCounter() {
  return (
    <div className="flex items-center gap-2 bg-base-hover px-4 py-2 rounded-xl">
      <button
        type="button"
        className="bg-base-hover text-xl font-medium text-purple-700"
      >
        -
      </button>
      <span className="ml-2 bg-base-hover">5</span>
      <button
        type="button"
        className="bg-base-hover text-xl text-purple-700 font-medium"
      >
        +
      </button>
    </div>
  );
}
