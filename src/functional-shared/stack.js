var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  var methodHolder = {
    push: function (value){
      this.size += 1;
      storage[size] = value;
    },

    pop:  function(){
      var tmp = storage[size];
      delete storage[size];
      this.size--; 
      return tmp;
    },

    size: function(){
      return thissize;
    }

      // _.extend(methodHolder)
  };
  return stack;
};