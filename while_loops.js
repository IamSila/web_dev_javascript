// while loops

/**
 * repeat a block of code for a certain number of times */

/**
 *  const x = 10; -----> initialize
 *  const y; -----> declaring
 *  y = 'name'
 *  y = name
 *
 *
 * while (condition)
  * {
    *block of code 

    increment / decrement
    * }
    *
    *
  */



/** use a while loop to print your name 10 times 
 *
 *pseudocode
 - Initialise or declare a variable which will be used in the while loop
 - create a while loop 
 - define the body of the while loop
 - increment or decrement

 condition = evaluates to either true or false

 infinity loop - this loop does not terminate and it is caused by the condition never having to evaluate to false.


 while_loops.js
 * */



let names = ["Maryam", "Cate", "Alex", "Henry", "James", "John"]

// print the above six name using a while loop.
// print only Maryam and Cate     ------> break
// Print Maryam, Henry, James, John. -------> continue

let numbers = [1, 2,3, 4, 5, 6,7, 8, 9];


let index = 0;
while (index < numbers.length)
{
  console.log(numbers[index])
  index = index + 1;
}

