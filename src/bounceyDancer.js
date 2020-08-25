var MakeBounceyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(MakeBounceyDancer.prototype)

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncey');

};

MakeBounceyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBounceyDancer.prototype.constructor = MakeBounceyDancer;

MakeBounceyDancer.prototype.step = function() {
  // this.oldStep();
  // MakeDancer.prototype.step.call(this, this.top, this.left, this.timeBetweenSteps);
  MakeDancer.prototype.step.call(this);

  this.$node.animate({top: this.top += 20 });
  this.$node.animate({top: this.top -= 20 });
};