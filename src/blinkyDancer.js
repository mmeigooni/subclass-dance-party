var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // MakeBlinkyDancer.call(this, )

  // we have built an instance of the dancer class {$node, step, setPosition}


  // prevents overwrite from new dancers
  // permenantly assigns a step method based off the instance
  var oldStep = blinkyDancer.step; // saves 'schedule' blinkyDancer

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step

    oldStep(); // evaluates to a placement of a red dot after x seconds

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();// toggles the immage away
  };

  return blinkyDancer;
};