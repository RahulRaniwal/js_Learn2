const fs = require('fs');
const path = require('path');
// using fs promise
const fsPromises = require('fs').promises;



const fileOperation = async () =>{
  try{
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt') , 'utf-8');
    // console.log(data);
    await fsPromises.writeFile(path.join(__dirname, 'files', 'writeCheck.txt') , data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'writeCheck.txt') , '\n\n Hi sir raniwal here.')
  }catch(err){
    console.log("Error is: " , err);
  }
}

fileOperation();

// fs.readFile(path.join(__dirname , 'files' , 'lorem.txt') , (err , data) =>{
//   if(err) throw err
//   console.log(data.toString());
// })

// // write file
// fs.writeFile(path.join(__dirname , 'files' , 'writeCheck.txt') , "I am trying to write in a file." , (err) =>{
//   if(err) throw err;
//   console.log("Write in a file done.")
// })

// to handle uncaught error
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error:', err);
  process.exit(1); // Exit the process with an error code
});