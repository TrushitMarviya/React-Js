import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="container">
            <div className="counter-box">
                <h2 className="title">Counter</h2>
                <p className="count">{count}</p>
                <div className="button-group">
                    <button className="btn increase" onClick={increase}>
                        +
                    </button>
                    <button className="btn decrease" onClick={decrease}>
                        -
                    </button>
                </div>
                <button className="btn reset" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}
