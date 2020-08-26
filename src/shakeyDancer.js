var MakeShakeyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(MakeShakeyDancer.prototype)

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shakey');
};

MakeShakeyDancer.prototype = Object.create(MakeDancer.prototype);
MakeShakeyDancer.prototype.constructor = MakeShakeyDancer;

MakeShakeyDancer.prototype.step = function() {
  // this.oldStep();
  // MakeDancer.prototype.step.call(this, this.top, this.left, this.timeBetweenSteps);
  MakeDancer.prototype.step.call(this);

  // generate random r g and b values between 0 and 256
  // set the border-color to this generated value
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  this.$node.css('border-left-color', 'rgb(' + red + ',' + green + ',' + blue + ')' );
  this.$node.css('border-right-color', 'rgb(' + green + ',' + blue + ',' + red + ')' );
  this.$node.css('border-right-width', 10);

  // let rando = Math.floor(this.timeBetweenSteps / 10);
  // this.$node.animate({left: this.left += rando });
  // this.$node.animate({top: this.top += rando });
  // this.$node.animate({left: this.left -= rando });
  // this.$node.animate({top: this.top -= rando });



};