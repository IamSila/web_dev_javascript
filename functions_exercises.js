/**
 * Write a function to Calculate the sum of numbers in 
 * an array of numbers e.g [1,2,3,4,5]
 *
 * pseudocode
 * ___________________________________________________________________
 *  - function declaration, definiton, call
 * - create a function that accpets an array as the parameter.
 * - calculate the sum of all the elements in the array 
 *
 *
 *   case sceneario: if our array is [1,2,3,4,5] the output after calling
 *   the functions should be 15
 *
 *
 *   our solution the normal way to create function and arrow functions.
 */


/*
 * function nameoffunction(parameters optional)
 * {
    * define the body of the function 
    * return value or we can console.log
    * }
*/



function sum_of_array_elements(array)
{
  // sum of all the elements in the array
  let sum = 0; // store the sum of the elements
  let array_length = array.length;

  for (let i = 0; i < array_length; i++)
  {
    sum = sum + array[i];
  }
  console.log(sum);
}

// call the function 
let array_numbers = [1,2,3,4,5];
sum_of_array_elements(array_numbers)


/** arrow functions */ 
const Sum_of_array_elements = (array) => {
  let sum = 0; // store the sum of the elements
  let array_length = array.length;

  for (let i = 0; i < array_length; i++)
  {
    sum = sum + array[i];
  }
  console.log(sum);

}

Sum_of_array_elements(array_numbers);



