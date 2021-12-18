require("dotenv").config();
const express = require('express');
const productRoutes = require("./routes/productRoutes");
const cors = require('cors')
const connectDB = require("./config/db");

connectDB();
const app = express();
app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`));