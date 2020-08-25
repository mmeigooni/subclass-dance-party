var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(MakeBlinkyDancer.prototype)

  MakeDancer.call(this, top, left, timeBetweenSteps);


};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // this.oldStep();
  // MakeDancer.prototype.step.call(this, this.top, this.left, this.timeBetweenSteps);
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};