import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  const { name, email, message } = req.body;

  const inquiry = await Inquiry.create({ name, email, message });

  res.status(201).json(inquiry);
};

export const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find();
  res.json(inquiries);
};