var queueMethods = {
  enqueue: function (value){
    this.storage[this.last] = value;
    this.last++;
    this.length++;
  },
  dequeue:  function(){
    var temp = this.storage[this.first];
    this.first++;
    this.length -= 1;
    return temp;
  },
  size: function(){
    return this.length;
  }
};

var Queue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here

   var queue = {
    first : 0,
    last : 0,
    length : 0,
    storage : {}
  };
  _.extend(queue, queueMethods);
  return queue;

};


