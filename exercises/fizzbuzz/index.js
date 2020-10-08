// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


//console log
//for loop
//multiple
//specific operator(modulo) for remainders eg:11 % 3 === 0 



function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
   //   is the number a multiple of 3 or 5?
   if (i % 3 === 0 && i % 5 === 0) {
       console.log('fizzbuzz');
       //is the number a multiple of 3?
   } else if (i % 3 === 0) {
    console.log('fizz');
    //is the number a multiple of 5?
   } else if (i % 5 === 0){
       console.log('buzz');
   } else {
       //if none then print out the number or i
      console.log(i); 
   }

  }  
}

module.exports = fizzBuzz;
