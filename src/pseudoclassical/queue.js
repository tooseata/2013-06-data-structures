
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
var Queue = function(value) {
  var storage = {};
  var len = 0;
  var first = 0;
  var last = 0;
  this.storage = storage;
  this.len = len;
  this.last = last;
  this.first = first;
};

Queue.prototype.enqueue = function(value) {
    this.storage[this.last] = value;
    this.last++;
    this.len++;
};

Queue.prototype.dequeue = function() {
    var temp = this.storage[this.first];
    this.first++;
    this.len -= 1;
    return temp;
};

Queue.prototype.size = function() {
  return this.len;
};
