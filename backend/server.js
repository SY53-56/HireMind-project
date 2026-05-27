require("dotenv").config();
const express = require("express");
const app = express();
const cookie= require("cookie-parser")
const connectDb = require("./src/config/db");
const ResumeRouter = require("./src/routers/resumeReport.routes");
const authRouter= require("./src/routers/auth.router")
const upload = require("./src/middleware/uploadsFile")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie())
app.use("/resume", ResumeRouter);
app.use("/auth",authRouter)
app.post(
  "/test",
  upload.single("file"),
  (req, res) => {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    res.json({
      body: req.body,
      file: req.file
    });
  }
);
const startServer = async () => {
  try {
    await connectDb();

    app.listen(5000, () => {
      console.log("successfully work on port 5000");
    });

  } catch (error) {
    console.log("DB connection failed:", error.message);
  }
};

startServer();