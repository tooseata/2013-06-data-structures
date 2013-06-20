var Queue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here

  var queue = Object.create(queueMethods);
  queue.first = 0;
  queue.last = 0;
  queue.length = 0;
  queue.storage = {}; 
  return queue;

};

var queueMethods = Queue.prototype;
  Queue.prototype.enqueue = function(value){
    this.storage[this.last] = value;
    this.last++;
    this.length++;
  };

  Queue.prototype.dequeue = function(){
    var temp = this.storage[this.first];
    this.first++;
    this.length -= 1;
    return temp;
  };

  Queue.prototype.size = function(){
    return this.length;
  };

