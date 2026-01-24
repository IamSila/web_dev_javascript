



/**
 * Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 


pseudocode
----------
- we are arranging 3 numbers
- we need 3 numbers - variables
- if num1 > num2 > num3 : num1
- if num2 > num1 > num3 : num2
- if num3 > num2 > num1 : num2
- logical operators and(&&) , or (||)
 */



let number1 = 10;
let number2 = 20;
let number3 = 30;


// 3, 2 ,1
if (number1 > number2 && number1 > number3)
{
    if (number2 > number3)
    {
        console.log(number1, number2, number3);
    }
    else {
        console.log(number1, number3, number2);
    }
}
else if (number2 > number1 && number2 > number3)
{
    if (number1 > number3)
    {
        console.log(number2, number1, number3);
    }
    else {
        console.log(number2, number3, number1);
    }
}
else if (number3 > number1 && number3 > number2)
{
    if (number1 > number2)
    {
        console.log(number3, number1, number2);
    }
    else {
        console.log(number3, number2, number1);
    }
}


