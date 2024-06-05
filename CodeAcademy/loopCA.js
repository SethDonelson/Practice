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