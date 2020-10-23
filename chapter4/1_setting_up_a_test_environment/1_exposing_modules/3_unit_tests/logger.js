const fs = require("fs");

const logger = {
  log: msg => fs.appendFileSync("logs.out", msg + "\n")
};

module.exports = logger;
