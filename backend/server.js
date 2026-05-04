// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import inquiryRoutes from "./routes/inquiryRoutes.js";
// import cors from "cors";

// dotenv.config();
// connectDB();
// const app = express();
// app.use(cors());
// app.use(express.json());

// console.log("MONGO_URI:", process.env.MONGO_URI);

// app.use("/api/auth", authRoutes);
// app.use("/api/inquiry", inquiryRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));








import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://your-frontend.vercel.app",
  credentials: true
}));
app.use(express.json());

// ✅ Root route (important for Render)
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inquiry", inquiryRoutes);

const PORT = process.env.PORT || 5000;

// ✅ Start server ONLY after DB connects
const startServer = async () => {
  try {
    await connectDB(); // wait for DB
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();