import { Tamagotchi } from './../js/tamagotchi.js';

describe ('Tamagotchi', function(){
  let hiro;

  beforeEach(function(){
    hiro = new Tamagotchi("Hiro");
    jasmine.clock().install();
    hiro.setHunger();
    hiro.setLonely();
    hiro.setTired();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name, food level of 100, attention level of 100, and rest level of 100 when it is created', function(){
    expect(hiro.name).toEqual("Hiro");
    expect(hiro.foodLevel).toEqual(100);
    expect(hiro.attentionLevel).toEqual(100);
    expect(hiro.restLevel).toEqual(100);
  });

  it('should have a food level of 91, attention level of 85, and rest level of 97 after 3001 milliseconds', function(){
    jasmine.clock().tick(3001);
    expect(hiro.foodLevel).toEqual(91);
    expect(hiro.attentionLevel).toEqual(85);
    expect(hiro.restLevel).toEqual(97);
  });

  it('should die if it is not played with after 20 seconds', function(){
    jasmine.clock().tick(20001);
    hiro.isDead();
    expect(hiro.death).toEqual(true);
  });

  it('should die if the attention level drops below 0', function(){
    hiro.attentionLevel = 0;
    hiro.isDead();
    expect(hiro.death).toEqual(true);
  });

  it('should gain attention when played with', function(){
    jasmine.clock().tick(15001);
    hiro.play();
    expect(hiro.attentionLevel).toEqual(100);
  });

  it('should gain food when fed', function(){
    jasmine.clock().tick(15001);
    hiro.feed();
    expect(hiro.foodLevel).toEqual(100);
  });

  it('should gain rest when put to sleep', function(){
    jasmine.clock().tick(15001);
    hiro.sleep();
    expect(hiro.restLevel).toEqual(100);
  });

});
