/**
 * arrow functions in js
 * const variable = (parameter()=> {
 *     define the body of the function
 * }
 */

function sum(a, b)
{
    return (a + b);
}

const sum1 = sum(1, 2);
console.log(sum1);

// declaration and definition of the function
const arrow_function = (x, y) => {
    return (x + y);
}
//calling the function
const results = arrow_function(4, 6); 
console.log(results);

// create an arrow function that prints a name
const print_name = (name) => {
    console.log(name)
}

print_name("Maryam");

/**
 * DECLARATION- syn, 
 */

// Using functions in objects.

const details = {
    first_name: "James",
    last_name: "Doe",
    course: "Javascript",
    greeting: () => {
        return (`Hello, ${this.first_name} ${this.last_name}, how is ${this.course}`)
    }
}

console.log(details.greeting());

const location = true;
console.log(`You live in ${location}`);
