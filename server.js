const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3001;

app.use(express.json());

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://Localhost:27017/social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
