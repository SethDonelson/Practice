// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:
// camelize("list-style-image") == 'listStyleImage';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function dashToCamelCase(str){ 
    let arrOne = str.split('-');     //splits and removes dash

let arrTwo = arrOne.map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase ())     //capitalize every 1st letter

let result = arrTwo.join("");   //join back together as a string

alert(result);
}
dashToCamelCase("list-style-image")
dashToCamelCase("big-win-today-folks")
