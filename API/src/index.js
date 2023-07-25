const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

require("./config/database");

app.use("/api/v1.0/leads", require("./routes/lead.route"));

app.use(bodyParser.json());
app.use(morgan("dev"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Sever on port ${app.get("port")}`);
});
