const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/")

app.get("/", (req, res) => {
  

})

app.listen(PORT, () => {
  console.log(`Server is working on $PORT`);
});
