import { useState } from "react";
import { Link } from "react-router-dom";
import dSkull from "./assets/d-skull.svg";

function NotFound() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <img src={dSkull} className="h-32 w-32 mx-auto" alt="logo" />
      </div>
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        404 Page Not Found!
      </h1>
      <p className="text-text-muted mb-6">
        With a useState counter to play with!
      </p>
      <div className="space-x-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-surface hover:bg-gray-700 text-text font-bold py-2 px-4 rounded border border-gray-600 transition-colors"
        >
          count is {count}
        </button>
        <Link
          to="/"
          className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-block transition-colors"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
