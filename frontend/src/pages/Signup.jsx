import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("https://greenroot.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.message || "Error signing up");
        return;
      }

      console.log("Signup Successful");
      navigate("/login");
    } catch (err) {
      console.error(err);
      console.log("Something went wrong");
    }
  }

  return (
    <div className="container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>

      <small>
        Already have an account? <a href="/login">Login</a>
      </small>
    </div>
  );
}
