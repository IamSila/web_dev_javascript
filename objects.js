/**
 * objects in js
 * these are data structures which allows us to store many things in one place [varable]
 * elements are the different values in that objects
 * when  creating object we use key:values pair
 * to access an element we use the dot notation or the [] brackets
 */


/**
 * const object_variable = {
 *      member_key: member_value,
 *      member_key: member_value,
 * }
 *
 * to acces the member_values
 * object_variable.member_key
 *
 *store a student details called Tom and has age of 20 and takes js course

        name -> Tom
        age -> 20
        couse -> js

    isa variable the best or an object...
 */


const tom_details = {
    name: "Tom",
    age: 20,
    course: "javascript",
}

tom_details.name = "Stacy";
tom_details.age = 50;

console.log(`The student's name is ${tom_details.name} and his age is ${tom_details.age} and he is taking ${tom_details.course}`);

// how to modify the member_value in an object

// how to access the member_value using [] notation
// object_variable['member_key']
console.log(`The name of the student is ${tom_details['name']}`);
console.log(`the age is ${tom_details['age']}`);

// how to store different details in one object

const student_details = {
    tom: {
        name: "Tom",
        age: 20,
        course: "javascript"
    },
    stacy: {
        name: "stacy",
        age: 25,
        course: "computer application",
    },
}

const school_details = {
    name: "Westfield",
    location: "eastleigh",
    level: "college",
}


const array_objects = [student_details, school_details];
console.log(array_objects[0]['stacy']['age']);
