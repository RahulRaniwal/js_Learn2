const fs = require("fs");
const path = require("path");

// Function to write data to the movies.json file
module.exports = (data) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "movies.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log("Data has been written to movies.json");
  } catch (error) {
    console.error("Error writing to movies.json:", error);
  }
};
