const path = require("path");

const filePath =
  "C:/Users/Asus/OneDrive/Desktop/Learning/JsLearn/js_Learn2/node_express/nodejs-tutorial2/files/sample.txt";

// // dirname
// console.log(path.dirname(filePath));
// // basename
// console.log(path.basename(filePath));
// // extension
// console.log(path.extname(filePath));

const fs = require("fs");
const fsPromise = require("fs").promises;
// console.log(fs);

/************* Reading from a file (Async way) *********/

// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     throw new Error("Something went wrong");
//   }
//   console.log(data.toString());
// });

/***************Using Sync way*****************/
// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, "files", "sample.txt"),
//     "utf-8"
//   );
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

/**************Using Fs Promise********** */
// const filereading = async () => {
//   try {
//     const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// filereading();

/************Wrinting into file*************/

const txtFile = path.join(__dirname, "files", "text.txt");
const content = "I will be a great develoepr in coming years.";
// fs.writeFile(txtFile, content, (err) => {
//   if (err) {
//     throw new Error("Something went wrong");
//   }
//   console.log("Write operation is completed");
// });

/***************Using fs Promise************* */
const writingFile = async () => {
  try {
    await fsPromise.writeFile(txtFile, content);
    await fsPromise.appendFile(txtFile, "\n this is file appender");
    const data = await fsPromise.readFile(txtFile, { encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

writingFile();
