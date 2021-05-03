var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // means that it will always find this element and specify what it will be
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value)); //value is always a string, "+" in front of string change it to number
});
