const express = require("express");
const errorHandler = require("./middlewares/error.middlewares");
const authRoutes = require("./routes/auth.routes");
const helmet = require("helmet");
const app = express();
const cors = require("cors");

// Import Routes
const teacherRoutes = require("./routes/teacher.routes");

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173"
    })
);
app.use(express.json());

//Security Headers
app.use(helmet());
// Auth Routes
app.use("/api/auth", authRoutes);

// Teacher Routes
app.use("/api/teacher", teacherRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Teacher API");
});
app.use(errorHandler);
module.exports = app;
