// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class=${this}></span>');
  this.$node = $('<span class="dancer"></span>');
  // dancer.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this.top, this.left);
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

makeDancer.protoype.lineUp = function () {

};

//var dancer = new makeDancer();

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//var dancer = new makeDancer(top, left, timeBetweenSteps);
//console.log("dancer" ,dancer);
//dancer.step();
//dancer.setPosition(top, left);

/*
requirement 1 ---------------------
Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.

Feel free to refer to the slide decks on Functional Subclasses & Pseudoclassical Subclasses

 requirement 2 -------------------

 Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).

Add a link in the top bar of dancefloor.html to create a dancer of each new type you create


Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html.


Having trouble coming up ideas? Here are some example hierarchies:

[Dancer] > [PopDancer] > [RickAstleyDancer]
[Dancer] > [FightingDancer] > [ZangiefDancer]
[Dancer] > [BouncyDancer]
[Dancer] > [SuperHeroDancer] > [BatmanDancer]


Make your dancers visually distinct and adorable with CSS and JS! Don't skimp on the CSS here. It is a core tool everyone can benefit from additional experience with. Hack Reactor alumni frequently report getting CSS questions in interviews and knowledge requirements for their primarily JavaScript oriented jobs.

Changing colors!
Moving around the page!
Growing or shrinking in size!
Other shapes besides circles!
Rotation!


Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.


Use an image (<img> tag or CSS background-image) instead of plain-jane RGB to add some pizazz!






// make 2 new dancers
new js files

inheriting from dancer.js

write tests for the new types that you create


*/