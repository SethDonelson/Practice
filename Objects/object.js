const aurora = {
    name: "Aurora",
    strength: 25,
    health: 150,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.xp} xp and ${this
          .strength} as strength`;
      }
}

console.log(aurora.describe((aurora.health -= 20),(aurora.strength +=10),(aurora.xp += 15)))



class MakeDog{
    constructor(name,species,size){
        this.name = "TODO" 
        this.species = "bloodhound" 
        this.size = 75
    }
    bark (){
        return "grrr!!!"
    }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


