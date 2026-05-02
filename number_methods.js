/** number methods 
 * to manipulate numbers ---- more functionality
 *
 * toString - convert a number to a string 
 * */ 
let number = 1000.3454554524535353534534; 
let number1 = number.toString();

// toExponential()
let numberExponential = number.toExponential(2);
console.log(numberExponential);

//toFixed()
let numberFixed = number.toFixed(5);
console.log(`toFixed(5) ---> ${numberFixed}`);

console.log(`toPrecision(5) ---> ${number.toPrecision(3)}`);
console.log(`valueOf ---> ${(99 + 100 + 3).valueOf()}`);

console.log(number1)    // 100 -> string version 
let numberType = typeof(number1);
console.log(numberType); // String


// converting strigs to numbers.
let string = "12345";
let string_to_number = Number(string);
console.log(string); // 12345
console.log(string_to_number);

// converting strings/numbers to numbers using parseFloat.
let number_1 = 12345;
let number_to_float = parseFloat(number_1);
console.log(number_1); // 12345
console.log(number_to_float);

// converting string/numbers to numbers using parseInt 
let number_2 = 12345.2433243;
let float_to_int = parseInt(number_2);
console.log(float_to_int);





// toFixed()
let num = 10.345;
let num_to_five_dp = num.toFixed(5);
let num_to_precision = num.toPrecision(8);
let num_valueof = (num * 3).valueOf().toFixed(3).toString(); // string
console.log(`num ${num} valueOf is ${num_valueof}`);



let num_isinteger = Number.isInteger(10);
let num_isNaN = Number.isNaN("string");
let num_isinfinite = Number.isFinite(NaN);
let num_safe = Number.isSafeInteger(10);
let num_Notsafe = Number.isSafeInteger(12345678901234567890);
console.log(num_Notsafe);

let x = Number.NEGATIVE_INFINITY;
console.log(x);





console.log("We are 'Vikings'");
console.log('We are "Vikings"');

/** the escape character is the backslash \ */ 
console.log("We are the \"Vikings\"");

// backticks help us to achieve multi line strings .
let message = `Hello Maryam,
  you are
  learning js
  `;
