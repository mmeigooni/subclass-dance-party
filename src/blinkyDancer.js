var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = this.step;
};

MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};