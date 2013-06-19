describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });


  it('Add a value to the back of the queue', function() {
    queue.enqueue('bob');
    queue.enqueue('mary');
    expect(queue.dequeue()).to.eql('bob');
  });

  it('Remove and return the string at the front of the queue', function() {
    queue.enqueue('joe');
    queue.enqueue('john');
    expect(queue.dequeue()).to.eql('joe');
  });

  it('Return the number of items in the queue', function() {
    queue.enqueue('joe');
    queue.enqueue('john');
    expect(queue.size()).to.eql(2);
  });

  // Hey! Add tests here that thoroughly test the functionality of your queue
});
