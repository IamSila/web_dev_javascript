


let country = "Kenya";

console.log(typeof(country));

/** string methods - manipulate strings in javascript 
 * method - interchangebly with functions
 * sum() ... method()
 * */


/** brand, model, color */
class Car /** initialising a class called Cars */
{
  constructor(brand, model, color) /** properties for all cars */
  {
    this.car_name = brand;
    this.car_model = model;
    this.car_color = color;
  }

  details() /** method inside our Car class */
  {
    console.log(`My car details: ${this.car_name}, ${this.car_model} ${this.car_color}`)
  }

}

let car = new Car("Mercedes", "C class", "Red");
car.details();
"*".repeat(4)




// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

/**
 * pseudocode
 * __________________
 * loop runs 10 times.
 * prints stars according to the loop number/values(
 * for loop

 */

let row;

for (row = 1, row <= 10; row++)
{
    console.log("*");
}





