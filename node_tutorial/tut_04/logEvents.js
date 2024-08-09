const {format} = require('./node_modules/date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async (message) =>{
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss') }`;
  const logEntry = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logEntry);
  try {
    if(!fs.existsSync(path.join(__dirname , 'logs'))){
      await fsPromises.mkdir(path.join(__dirname , 'logs'));
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs' , 'eventLog.txt') , logEntry);
  } catch (error) {
    console.log("Error is: " , error);
  }
}

module.exports = logEvents;

// console.log(uuid());

// console.log(format(new Date() , 'yyyyMMdd\tHH:mm:ss'))