import { useState } from "react";
import API from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/inquiry", form);
      alert("Inquiry Sent");
    } catch (err) {
      alert("Error sending inquiry");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow">
      <h3>Contact Us</h3>

      <input className="form-control mb-2" placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <textarea className="form-control mb-2" placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })} />

      <button className="btn btn-warning">Submit</button>
    </form>
  );
};

export default Contact;