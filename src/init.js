$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // var dancerMakerFunctionName = 'makeBlinkyDancer';

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // what is .$node
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpDancers').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      let curDancer = window.dancers[i];
      curDancer.lineUpDancers();
    }
  });

  $('.orbitalDance').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      let curDancer = window.dancers[i];
      curDancer.orbitDance();
    }
  });

  $(document).on('mouseover', '.dancer', function() {
    // document.tempWidth = $('this').css('border-width');
    // console.log(document.tempWidth);
    $(this).css('border-width', '75px');

  });
  // .on('mouseout', '.dance', function() {
  //   $(this).css('border-width', tempWidth);
  // });

  // this.className.border-width
/**
 * calculate distance between two dancers
 * bring the two closest dancers together
 *
 * do so by averaging their distance in half
 *
 */
});

