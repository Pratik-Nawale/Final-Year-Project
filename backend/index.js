const express = require("express");



const app = express();

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up and running on the port ${port}`);
});