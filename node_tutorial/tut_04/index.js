const logEvent = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initializethe object
const myEmitter = new MyEmitter();

// add listner for the log event
myEmitter.on('log' , (msg) => logEvent(msg));

setTimeout(() =>{
  myEmitter.emit('log' , 'Event emitted')
},2000);