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
  let rando = Math.floor(this.timeBetweenSteps / 10);
  this.$node.animate({left: this.left += rando });
  this.$node.animate({top: this.top += rando });
  this.$node.animate({left: this.left -= rando });
  this.$node.animate({top: this.top -= rando });



};