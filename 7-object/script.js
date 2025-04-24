// Create a unique symbol (used as a special object key)
const mySym = Symbol("key1");

// Create an object representing a user
const jsUser = {
    name: "Pratham",                    // String property
    [mySym]: "mykey1",                 // Symbol as a property key
    age: 22,                           // Number property
    mail: "pdgehlot@gmail.com"        // Email (corrected formatting)
};

// Accessing properties using bracket notation
console.log("User's email:", jsUser["mail"]);

// Accessing the Symbol-keyed property
console.log("Symbol value:", jsUser[mySym]);

// Update a property value
jsUser.age = 23;

// Prevent further changes (uncomment to freeze the object)
// Object.freeze(jsUser);

// Modify another property
jsUser.name = "Gehlot";

// Print the updated object
console.log("Updated user object:", jsUser);

// Add a method (function) to the object
jsUser.greeting = function () {
    return "Hello JS user 👋";
};

// Call and log the method result
console.log(jsUser.greeting());
