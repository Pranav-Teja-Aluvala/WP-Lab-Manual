import { useEffect, useState } from "react";
import "../styles/clock.css";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="card clock">

            <h2>SP12 Digital Clock</h2>

            <div className="time">
                {time.toLocaleTimeString()}
            </div>

        </div>
    );
}

export default Clock;