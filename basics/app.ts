// Object Types

/*const person: {
  name: string;
  age: number;
} = {
  name: "Kacper",
  age: 22,
};
*/

// Better Syntax
const person = {
  name: "Kacper",
  age: 22,
  hobbies: ["music", "manga"],
};

let favActivity: string[];
favActivity = ["archery"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
