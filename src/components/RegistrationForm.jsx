import { useState } from "react";
import "../styles/form.css";

function RegistrationForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {

        e.preventDefault();

        if (!form.name || !form.email || !form.password) {
            setError("All fields required");
            return;
        }

        if (!form.email.includes("@")) {
            setError("Invalid Email");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must be 6 characters");
            return;
        }

        setError("");
        alert("Registration Successful");
    }

    return (

        <div className="card">

            <h2>SP11 Form Validation</h2>

            <form onSubmit={handleSubmit}>

                <input name="name" placeholder="Name" onChange={handleChange} />

                <input name="email" placeholder="Email" onChange={handleChange} />

                <input type="password" name="password" placeholder="Password" onChange={handleChange} />

                <button type="submit">Register</button>

            </form>

            <p className="error">{error}</p>

        </div>
    );
}

export default RegistrationForm;