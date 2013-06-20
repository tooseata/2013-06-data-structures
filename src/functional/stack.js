  var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    size += 1;
    storage[size] = value;
  };

  stack.pop = function(){
    var tmp = storage[size];
    delete storage[size];
    size--;
    return tmp;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};