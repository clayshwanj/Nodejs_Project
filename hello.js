const fs = require("fs");

fs.readFile("welcome.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
