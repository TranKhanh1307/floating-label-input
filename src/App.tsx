function App() {
  return (
    <div className="relative mx-12 my-2">
      <div className="space-y-6">
        {Array.from({ length: 30 }, (_, i) => (
          <FloatingLabelInput key={i} number={i} />
        ))}
      </div>

      <ScrollToTopBtn
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}

function FloatingLabelInput({ number }: { number: number }) {
  return (
    <div className="relative">
      <input
        id={number.toString()}
        type="text"
        placeholder=""
        className="peer rounded-md p-4 outline-2 outline-gray-400 not-placeholder-shown:outline-purple-400 focus:outline-purple-400"
      />
      <label
        htmlFor={number.toString()}
        className="absolute -top-1 left-3 -translate-y-1/2 bg-white px-2 py-1 text-xs text-purple-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-1 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-purple-400"
      >
        {`Label ${number}`}
      </label>
    </div>
  );
}

function ScrollToTopBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="fixed right-10 bottom-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200 shadow-md shadow-black"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
}

export default App;
