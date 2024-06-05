//iterating through 2 arrays with nested loops, good for comparing data, in this case finding mutual followers
let bobsFollowers = ['Tim', 'Seth' ,'Jose', 'Nate']

let tinasFollowers = ['Tim', 'Johnny', 'Nate']

let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let t = 0; t < tinasFollowers.length; t++){
    if(bobsFollowers[i] === tinasFollowers[t]){
      mutualFollowers.push(tinasFollowers[t])
    }
  }
}
console.log(mutualFollowers)




//simple for loop,  i can be anything I want it, but i is common

for( let i=5 ; i <=10; i++){
    console.log(i)
    }

//reverse the loop
for (let counter = 3; counter >=0; counter--){
        console.log(counter);
      }


//iterate through an array with a loop and print to the console
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}





//while loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard; 
while(currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
 //assigns card index to random number 0-3 and prints the card 




 //do while loop
 let cupsOfSugarNeeded = 3
let cupsAdded = 0

do {
  console.log(cupsAdded);
  cupsAdded++; 
} while (cupsAdded < cupsOfSugarNeeded);
//prints 0,1,2






//for loop with break function added in 

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i = 0; i <rapperArray.length; i++){
  
  if ( i > 1){
    break;
  }
  console.log(rapperArray[i])
}
console.log("And if you don't know, now you know.")
