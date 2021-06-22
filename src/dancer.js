// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {

  // this.top = top;
  // this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  //this.$node = $('<span class=${this}></span>');

  this.step();
  this.setPosition(top, left);
  //this.lineUp();
};

makeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function (node) {
  var styleSettings = {
    left: 0
  };
  this.$node.css(styleSettings);
};
