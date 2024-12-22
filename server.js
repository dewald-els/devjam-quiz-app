const express = require("express");
const app = express();
const { PORT = 8080 } = process.env;
const { join } = require("path");

const distDir = join(__dirname, "dist");
app.use(express.static(distDir));

app.get("*", (req, res) => {
  return res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(PORT, function () {
  console.log("Server running on port: " + PORT);
});
