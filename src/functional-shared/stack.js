var stackMethods = {
  push: function (value){
    size = this.size;
    storage = this.storage;
    storage[size] = value;
    size += 1;
  },
  pop:  function(){
    storage = this.storage;
    var tmp = storage[size];
    delete storage[size];
    this.size--;
    return tmp;
  },
  size: function(){
    size = this.size;
    return size;
  }
};

var makeStack = function(){
  // Use an object with numeric keys to store values
  var stack = {};
  stack.storage = {};
  stack.size = 0; // Hint: set an initial value here
  // Implement the methods below
  _.extend(stack, stackMethods);
  return stack;
};