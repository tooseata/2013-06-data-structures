var Stack = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var stack = Object.create(stackMethods);
    stack.length = 0;
    stack.storage = {}; 
    return stack;
};

var stackMethods = Stack.prototype;
  Stack.prototype.push = function(value) {
    this.storage[this.length] = value;
    this.length += 1;
};

Stack.prototype.pop = function(){
  var tmp = this.storage[this.length - 1];
  delete this.storage[this.length];
  this.length--;
  return tmp;
};

Stack.prototype.size = function() {
  return this.length;
};

