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
// return value - answer returned when we call a function.
function sum_of_two_numbers(a, b)
{
    const result = a + b;
    console.log (result);
}
// 40 and also undefined
console.log(sum_of_two_numbers(10, 30));
console.log(console.log(10));

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
console.log(createAccount('John', 25)); // function call 



// parameter - They are variables passed during function declaration which are used to store the arguments we pass during function call.
//
// during function call we can pass the arguments as values or as references.
// references -> memory location (varibles - memory location that stores value)
// pass by value
// pass by reference
function multiply(a, b)
{
    return (a * b);
}
function argument1(x, y)
{
    return (x + y);
}
function seven()
{
    return (7);
}
const argument2 = 20;
console.log(multiply(argument1(seven(), 5), argument2));

sum(8,9)






// create a function of your choice that takes 2 parameters as numbers.
// call it and pass the argument by value
// confirm if it works by running it
// call it again and pass the argument by reference.
// confirm if it runs.
// for the first argument of the funcion (sum(5, 6)), create another function that returns that number and pass it to your function i.e sum
// confirm if your function call works.

// 












