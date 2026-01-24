const User = {
    name: "Alex",
    //key: value
    age: 20,
    isStudent: false,
}
// printing key:value of User obj using a loop
for (const key in User)
{
    console.log(`${key}:${User[key]}`);
}


console.log(User["name"]);


/**
 * for(initialization, condition, direction)
 * {
 *      body
 * }
 */

/**
 * looping thru objects in a ds
 * for (const key in object)
 * {
 *      body
 * }
 */


