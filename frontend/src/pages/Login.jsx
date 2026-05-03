import { useState } from "react";
import API from "../services/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login Successful");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow">
      <h3>Login</h3>

      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button className="btn btn-success">Login</button>
    </form>
  );
};

export default Login;