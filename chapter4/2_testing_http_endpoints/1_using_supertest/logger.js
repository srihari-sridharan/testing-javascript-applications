const fs = require("fs");
const path = require("path");

const logger = {
  log: msg => fs.appendFileSync("logs.out", msg + "\n")
};

module.exports = logger;
