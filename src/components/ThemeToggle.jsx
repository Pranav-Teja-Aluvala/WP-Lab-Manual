import { useState, useEffect } from "react";

function ThemeToggle() {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark]);

    return (

        <div className="card">

            <h2>SP10 Theme Toggle</h2>

            <button onClick={() => setDark(!dark)}>
                Toggle Theme
            </button>

        </div>
    );
}

export default ThemeToggle;