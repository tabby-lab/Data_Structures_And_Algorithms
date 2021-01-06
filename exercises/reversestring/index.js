// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//convert string to array
//call reverse
//join array back into a string
//return back

//1st solution

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}


module.exports = reverse;

//or 

// function reverse(str) {
//    return str.split('').reverse().join('')
// }


// module.exports = reverse;


//2nd solution

//create an empty string called 'reversed
//for each character in the provided string take the character and add it to the start of 'reversed'
//return the variable 'reversed'
//use for of syntax

// function reverse (str){
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;

//     }

//     return reversed;

// }

// module.exports = reverse;



//3rd solution
//i dont understand this one
//take string turn it into array
//split
//reduce helper.used to take all dif values of an array and condense them down to one value

// function reverse (str){
//  return str.split('').reduce((reversed, character)=>{
//     return character + reversed;
//  }, '')
// }

// module.exports = reverse;









// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// module.exports = reverse;


// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//          return character + reversed;
//      }, '');
 
//  }
 
//  module.exports = reverse;