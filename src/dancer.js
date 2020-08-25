// superclass
var MakeDancer = function(top, left, timeBetweenSteps) {

  // this = Object.create(MakeDancer.prototype);

  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;


  /**
   * dancer = {
   *    $node: $('<object to add to html>') // jQuerry
   *    step: f{setTimeout(dancer.step, timeBetweenSteps)} } // recursion
   *    setPosition: f{ creates css style, then assigns }
   */

  // use jQuery to create an HTML <span> tag
  // .$node is a key for a value in an object
  this.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  this.step();
  // this is why they blink forever
  // timeBetweenSteps allows for pause, and prevents timeout
  // this action abuses syncryonys function execution
  // by continuing to build onto the event queue and event loop



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  // position is determend

  // return this;

  // sends to blinkyDancer
};

MakeDancer.prototype.step = function() {
  setTimeout.bind(this, this.step, this.timeBetweenSteps)();
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);

};


// delete the creation and returning of dancer obj, due to new keyword

// change all the .methods to makeDancer.prototype.method = function() {}

// note -- make sure that we're using the new keyword for new instances of things

// change