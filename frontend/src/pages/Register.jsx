import { useState } from "react";
import API from "../services/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      alert("Registered Successfully");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow">
      <h3>Register</h3>

      <input className="form-control mb-2" placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button className="btn btn-primary">Register</button>
    </form>
  );
};

export default Register;