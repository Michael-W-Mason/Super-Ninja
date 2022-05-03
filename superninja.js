class Ninja{
    constructor(name, health=10, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`My Name is ${this.name}`);
    }

    showStats(){
        console.log(`My stats are: Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`Drinking Sake, my health is now ${this.health}`)
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom = 10, health, speed, strength){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei('Master Splinter', undefined, 210, 10, 10);
superSensei.speakWisdom();
superSensei.showStats();