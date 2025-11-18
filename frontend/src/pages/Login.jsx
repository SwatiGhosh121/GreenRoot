import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", form);
      localStorage.setItem("token", response.data.token);
      alert("Login Successful");
    } catch (err) {
      alert(err?.response?.data?.error || "Error logging in");
    }
  }

  async function testProtected() {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:3000/update",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
    } catch {
      alert("Unauthorized or token expired");
    }
  }

  return (
    <div className="container">
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      <button onClick={testProtected} style={{ marginTop: "12px", background: "#52b788" }}>
        Test Protected Route
      </button>

      <small>
        Don't have an account? <a href="/">Signup</a>
      </small>
    </div>
  );
}
