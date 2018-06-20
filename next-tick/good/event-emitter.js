const { EventEmitter} = require('events');

class NonConstructorEmitter extends EventEmitter {
  constructor(){
    super();
    this.emit('started', 'not-from-constructor');
  }
}

class ConstructorEmitter extends EventEmitter {
  constructor(){
    super();
    process.nextTick(() => this.emit('started', 'from-constructor'));
  }
}


const eventOne = new NonConstructorEmitter();
const eventTwo = new ConstructorEmitter();

eventOne.on('started', text => console.log(text));
eventTwo.on('started', text => console.log(text));