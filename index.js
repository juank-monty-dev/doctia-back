const express = require("express");
const cors = require("cors");

// env variables on process.env

require("dotenv").config();
// console.log(process.env);

// create express server
const app = express();

app.use(cors());

// Public directory
app.use(express.static("./public"));

// read and body parsing
app.use(express.json());

// 2. Define a route to DOCTIA
app.use("/api/doctia", require("./routes/doct.js"));

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});