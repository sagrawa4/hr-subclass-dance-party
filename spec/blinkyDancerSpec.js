describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(blinkyDancer, 'step');

      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});



/*

new tests go in here somewhere

*/

// ============== superHeroDancer ==================

describe('superHeroDancer', function() {

  var superHeroDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    superHeroDancer = new makeSuperHero(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(superHeroDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(superHeroDancer.$node, 'toggle');
    superHeroDancer.step();
    expect(superHeroDancer.$node.toggle.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(superHeroDancer, 'step');

      expect(superHeroDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(superHeroDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(superHeroDancer.step.callCount).to.be.equal(2);
    });
  });
});

// ============== PopDancer ==================

describe('popDancer', function() {

  var popDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new superHero(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(popDancer.$node, 'toggle');
    popDancer.step();
    expect(popDancer.$node.toggle.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(popDancer, 'step');

      expect(popDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(popDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });
});