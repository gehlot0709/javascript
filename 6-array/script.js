// Define hero arrays
const heroes = ["Spiderman", "Superman", "Jagdish"];
const dcHeroes = ["Flash", "Ironman", "Monkey"];

// Concatenate both arrays using concat()
const heroConcat = heroes.concat(dcHeroes);
console.log("Concatenated Array:", heroConcat);

// Concatenate both arrays using spread operator
const allHeroes = [...heroes, ...dcHeroes];
console.log("Concatenated using spread:", allHeroes);

// Correcting the nested array structure for flattening
const anotherArray = [1, 2, [3, [4, 5, 6]], 7, [6, 77], 4, 55, [4, 5]];

// Flattening the array completely
const realAnotherArray = anotherArray.flat(Infinity);
console.log("Flattened Array:", realAnotherArray);

// Check if "pratham" is an array
console.log("Is 'pratham' an array?", Array.isArray("pratham"));

// Convert "pratham" into an array
console.log("Converted String to Array:", Array.from("pratham"));

// Using Array.of to create an array from individual values
const scores = Array.of(100, 200, 300);
console.log("Array from individual scores:", scores);