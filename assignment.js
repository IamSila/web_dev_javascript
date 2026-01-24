const User = {
    name: "Alex",
    //key: value
    age: 20,
    isStudent: false,
}

const name = ""
// how do you print the user's name
console.log(User.name);
console.log(User.age);

// if the user is a student, print you are a student
if(User.isStudent === true)
{
    console.log("you are a student");
}
else
{
    console.log("you are not a student");
}


// how do you add a grade property to the User object
// user.newproperty = value
User.grade = "A";
console.log(User.grade);

// how do you update age to 21
// = -> assignment operator
// === -> comparison operators
console.log(User.age); // 20
User.age = 21;
console.log(User.age); // 21

// how do you delete isStudent
delete User.isStudent;
console.log(User.isStudent);
