// Object Types

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple type
} = {
  name: "Kacper",
  age: 22,
  hobbies: ["music", "manga"],
  role: [2, "author"], //tuple
};

// person.role.push("admin"); //exception in TypeScript
// person.role[1] = 10; //error

let favActivity: string[];
favActivity = ["archery"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
