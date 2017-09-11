export class Tamagotchi {

  constructor(name){
    this.name = name;
    this.foodLevel = 100;
    this.attentionLevel = 100;
    this.restLevel = 100;
    this.death = false;
  }

  setHunger(){
    setInterval(() => {
      this.foodLevel-=3;
    }, 1000);
  }

  setLonely(){
    setInterval(() => {
      this.attentionLevel-=5;
    }, 1000);
  }

  setTired(){
    setInterval(() => {
      this.restLevel-=1;
    }, 1000);
  }

  isDead(){
    if ((this.foodLevel <= 0) || (this.attentionLevel <= 0) || (this.restLevel <= 0)) {
      this.death = true;
      return this.death;
    } else {
      return false;
    }
  }

  feed(){
    if (!this.death){
    this.foodLevel = 100;
    }
  }

  play(){
    if (!this.death){
    this.attentionLevel = 100;
    }
  }

  sleep(){
    if (!this.death){
    this.restLevel = 100;
    }
  }


}
