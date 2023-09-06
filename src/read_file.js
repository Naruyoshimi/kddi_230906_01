const fs = require("fs");

var text = fs.readFileSync("./test1.txt", "utf8");
var lines = text.toString().split("¥n");
for (var line of lines) {
  console.log(line);
}
