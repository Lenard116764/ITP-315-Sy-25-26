const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan"];

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: {
    name: "Alex",
    age: 30,
  },
};

const grades = [75, 80, 90];
const allStudents = [...sectionA, ...sectionB, "Faith"];
const { brand, model } = car;
const {
  owner: { name, age },
} = car;

const updatedGrades = grades.map(grade => grade + 5);

console.log("All Students:", allStudents);
console.log(`Car: ${brand} ${model} (${car.year})`);
console.log(`Owner: ${name}, Age: ${age}`);
console.log("Updated Grades:", updatedGrades);
