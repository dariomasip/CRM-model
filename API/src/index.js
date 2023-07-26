const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");

require("./config/database");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api/v1.0/leads", require("./routes/lead.route"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Sever on port ${app.get("port")}`);
});
