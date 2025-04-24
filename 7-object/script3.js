// Define a course object with clear formatting
const course = {
    courseName: "JS in Hindi",
    price: 999,
    teacher: "Gehlot"
};

// Destructure the 'teacher' property and rename it to 'instructor'
const { teacher: instructor } = course;

// Log the instructor's name
console.log(instructor); // Output: Gehlot

// Example of a separate JSON format (not related to the code above)
const student = {
    name: "Pratham",
    id: "1"
};

console.log(student);
