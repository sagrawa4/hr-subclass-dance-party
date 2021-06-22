var makeSuperHero = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer3"></span>');
  this.setPosition(top, left);
  //this.lineup();

};

makeSuperHero.prototype = Object.create(makeDancer.prototype);
makeSuperHero.prototype.constructor = makeSuperHero;

makeSuperHero.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

