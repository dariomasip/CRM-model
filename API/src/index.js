const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Sever on port ${app.get("port")}`);
});
