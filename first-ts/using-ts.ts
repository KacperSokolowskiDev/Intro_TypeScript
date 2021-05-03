const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // means that it will always find this element and specify what it will be
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value)); //value is always a string, "+" in front of string change it to number
});
