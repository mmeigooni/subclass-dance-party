// superclass
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;


  this.$node = $('<span class="dancer"></span>');


  this.step();

  this.setPosition(top, left);

};

MakeDancer.prototype.step = function() {
  // setTimeout.bind(this, this.step, this.timeBetweenSteps)();
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    // perhaps set top: this.top and left: this.left
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);

};

MakeDancer.prototype.lineUpDancers = function() {
  this.left = 50;
  this.setPosition();
};

MakeDancer.prototype.orbitDance = function() {
  this.left = '50%';
  this.top = '50%';
  this.setPosition();

  // let rando = Math.floor(this.timeBetweenSteps / 10);
  // $(this).animate({left: this.left += rando });
  // $(this).animate({top: this.top += rando });
  // $(this).animate({left: this.left -= rando });
  // $(this).animate({top: this.top -= rando });

};


// delete the creation and returning of dancer obj, due to new keyword

// change all the .methods to makeDancer.prototype.method = function() {}

// note -- make sure that we're using the new keyword for new instances of things

// change