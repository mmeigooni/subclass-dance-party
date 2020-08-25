// superclass
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');

  this.step();

  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step, timeBetweenSteps);
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