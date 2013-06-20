var stackMethods = {
  push: function (value){
    this.storage[this.length] = value;
    this.length += 1;
  },
  pop:  function(){
    var tmp = this.storage[this.length - 1];
    delete this.storage[this.length];
    this.length--;
    return tmp;
  },
  size: function(){
    return this.length;
  }
};

var makeStack = function(){
  // Use an object with numeric keys to store values
  var stack = {};
  stack.storage = {};
  stack.length = 0; // Hint: set an initial value here
  // Implement the methods below
  _.extend(stack, stackMethods);
  return stack;
};