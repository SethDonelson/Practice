//understanding that arrays can be changed in a function and maintained that way as a "pass by reference"

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept)

function removeElement(newArr){
  newArr.pop()
}
removeElement(concept)
console.log(concept)


//use of nested arrays, make sure the [] is still separated by a comma
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];   //sets the target to index 2, then index 1,  which is the value 6
