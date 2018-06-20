const fs = require("fs");

const ioCycle = () => {
  setTimeout(() => console.log("setTimeout"), 0);
  setImmediate(() => console.log("setImmediate"));
};

fs.readFile(__filename, ioCycle);
