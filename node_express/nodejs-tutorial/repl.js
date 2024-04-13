// REPL : Read Evaluate Print and loop
const repl = require("repl");
const local = repl.start("The node console started");

local.on("exit", () => {
  console.log("Exiting REPL");
  process.exit();
});
