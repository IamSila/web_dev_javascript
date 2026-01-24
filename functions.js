/**
 * functions in js
 * a block of code that performs a specific task.
 * function name_of_function(parameters) {
 *      body of the function
 *      return value
 * }
 *
 * - a function cannot execute before we call it
 *  - we call a function by specifying it's name(arguments). this process is called invoking a function
 *  3 steps: function declaration, function definition, function call
 */

// a function called sum which returns the sum of two numbers

function sum_of_two_numbers(a, b)
{
    const result = a + b;
    return (result);
}

console.log(sum_of_two_numbers(10, 30));

// create a function that prints your name on the screen
// fucntion name_of_function(parameters)
// {
//      body
// }

// function prints the name passed to it
function print_name(name) // declaration
{
    //definition
    console.log(name);
}

/**
 * uses of comments in code
 * label your code
 * ignore the lines of code
 */


// function that does not take any parameters
function does_not_take_parameters()
{
    const name = "Maryam";
    console.log(name);
}
does_not_take_parameters();

/**
 * rules of variable naming
 * a var cannot have spaces
 * It cannot start with a digit
 * you cannot use keywords -- for, if, 
 * you cannot use any special characters -> -, + sum-of-tow
 * if it has 2 or more word you can connect then using an _  -> sum_of_two_numbers
 */



// default parameters
// function that takes in a car model and prints the model

function car_model(name="Mercedes", model)
{
    console.log(`The name of the car is ${name} and the model is ${model}`)
}










//
function createAccount(username = 'Anonymous', age = 18) {
  return `Username: ${username}, Age: ${age}`;
}

console.log(createAccount());           // Output: Username: Anonymous, Age: 18
console.log(createAccount('John'));     // Output: Username: John, Age: 18 (age uses default)
console.log(createAccount('John', 25));






