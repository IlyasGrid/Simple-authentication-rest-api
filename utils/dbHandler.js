const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./utils/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

const readDatabase = () => {
    try {
        const data = fs.readFileSync("./utils/db.json");
        return JSON.parse(data);
      } catch (error) {
        console.error(`Error reading file db.json: ${error}`);
        return null;
      }
  };

module.exports = { saveToDatabase ,readDatabase };