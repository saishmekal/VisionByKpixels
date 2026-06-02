const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db.js");

dotenv.config();

connectDB();

const app = express();


// middlewares
app.use(cors());

app.use(express.json());


// routes
app.use("/api/leads", require("./routes/lead.routes.js"));


// test route
app.get("/", (req, res) => {
  res.send("API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});