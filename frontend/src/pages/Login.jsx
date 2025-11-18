import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("https://greenroot.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.error || "Error logging in");
        return;
      }

      localStorage.setItem("token", data.token);
      console.log("Login Successful");
    } catch (err) {
      console.error(err);
      console.log("Something went wrong");
    }
  }

  async function testProtected() {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://greenroot.onrender.com/update", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("Unauthorized or token expired");
        return;
      }

      console.log(data.message);
    } catch (err) {
      console.error(err);
      console.log("Error testing protected route");
    }
  }

  return (
    <div className="container">
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      <button
        onClick={testProtected}
        style={{ marginTop: "12px", background: "#52b788" }}
      >
        Test Protected Route
      </button>

      <small>
        Don't have an account? <a href="/">Signup</a>
      </small>
    </div>
  );
}
