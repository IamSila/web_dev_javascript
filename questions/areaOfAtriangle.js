

/**
 * pseudocode
 * -----------
 * store the base and the height of each of the 3  triangles.
 * triangle1 = b=10, h=20 || triangle2 = b=30, h=40 || triangle3 = b=50, h=60
 * calculate the area of the triangles and store their values.
 * print out the area of the three triangles.
 * end of the program
 *
 * arrays - collections of elements of either same type of different data types
 * [base, height]
 * 
 */

/** triangle1 */
let triangleOneDetails = [10, 20];

/** triangle2 */
let triangleTwoDetails = [30, 40];
console.log(triangleTwoDetails[1]);

/** triangle3 */
let triangleThreeDetails = [50, 60];



let areaTriangle1 = (1/2) * triangleOneDetails[0] * triangleOneDetails[1];
let areaTriangle2 =  (1/2) * triangleTwoDetails[0] * triangleTwoDetails[1]; 
let areaTriangle3 = (1/2) * triangleThreeDetails[0] * triangleThreeDetails[1];

console.log(`Area of triangle1 is ${areaTriangle1}`);
console.log(`Area of triangle2 is ${areaTriangle2}`);
console.log(`Area of trianlge3 is ${areaTriangle3}`);




