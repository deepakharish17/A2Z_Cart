const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase= require("./config/connectDatabase");

// Load env variables
dotenv.config({ path: path.join(__dirname, "./config/config.env") });

// Middleware to parse JSON
app.use(express.json());

// Routes
const products = require("./routes/product");
const order = require("./routes/order");

// Connect to database
connectDatabase();
app.use(express.json());
app.use(cors());

// API routes
app.use("/api/v1", products);
app.use("/api/v1", order);

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
