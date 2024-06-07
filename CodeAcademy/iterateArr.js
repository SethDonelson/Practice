//use forEach() to iterate through the array, used an arrow function here
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`))




//use map() to go through the array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])
console.log(secretMessage.join(''));
const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num / 100)
console.log(smallNumbers)




//use filter() to go through an array, will produce a new array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => num < 250)
console.log(smallNumbers)
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => word.length > 7)
console.log(longFavoriteWords)




//use findIndex() to get specific index for 'elephant'
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(ani => {ani === 'elephant'})
//find first index that starts with 's'
const startsWithS = animals.findIndex(ani => ani.charAt(0) === 's')
//the longer version without an arrow function  
const startWithS = function startS(ani){
  animals.findIndex(ani.chartAt(0) === 's')
}



//use reduce((acc, c) => )              , this one logs each value
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);return accumulator + currentValue}, +10 )
console.log(newSum)