var Stack = function() {
  var storage = {};
  var length = 0;
  this.storage = storage;
  this.length = length;
  };

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
  };

Stack.prototype.pop = function() {
  var tmp = this.storage[this.length - 1];
  delete this.storage[this.length];
  this.length--;
  return tmp;
  };

Stack.prototype.size = function() {
  return this.length;
  };
