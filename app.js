const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/", router);

app.listen(process.env.port || 3001);
console.log("Running at Port 3001");
