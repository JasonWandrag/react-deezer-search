const fs = require("fs");

const writeErrorLog = (err) => {
  const today = new Date().toLocaleDateString();
  fs.appendFileSync(
    "error-log.txt",
    `
      Error on ${today}:
      ${err}
      _______________________________________
      `
  );
};

module.exports = writeErrorLog;
