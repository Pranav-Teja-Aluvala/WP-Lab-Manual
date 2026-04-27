import { useState } from "react";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function registerUser() {
        alert("Registered: " + name + " " + email);
    }

    return (

        <div>

            <h2>SP1 Registration Form</h2>

            <input
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <button onClick={registerUser}>
                Register
            </button>

        </div>
    );
}

export default Registration;