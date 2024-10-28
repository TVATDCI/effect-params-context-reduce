import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function NotFound() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo" alt="logo" />
                </a>
            </div>
            <h1>404 Page Not Found!</h1>
            <p>With a useState counter to play with!</p>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

                <br />

                <button onClick={() => window.location.replace("/")}>
                    home page
                </button>
            </div>
        </>
    );
}

export default NotFound;
