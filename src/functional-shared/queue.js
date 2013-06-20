var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var queue = {};
  var first  = 0;
  var last = 0;
  var size = 0;

  queue.enqueue = function(value){
    storage[last] = value;
    last++;
    size++;
  };

  queue.dequeue = function(){
    var temp = storage[first];
    // erase the value

    // do something to first
    first++;

    // we need to remove the element in storage with the greatest size
    // how do we check what the gretest size is
    size -= 1;
    return temp;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
