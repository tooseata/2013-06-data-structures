var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
      = value;
    
  };

  queue.dequeue = function(){
  
    size -= 1;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
