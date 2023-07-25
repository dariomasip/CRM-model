const express = require("express");
const app = express();
require("dotenv").config();

require("./config/database");

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Sever on port ${app.get("port")}`);
});
