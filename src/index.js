import React from "react";
import ReactDOM from "react-dom/client";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
const newNumbersFiltered = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbersFiltered);
//Reduce - Accumulate a value by doing something to each item in an array.
var newReducedNumbers = numbers.reduce(function (accumulator, currentNumber) {
  return (accumulator += currentNumber);
});
console.log(newReducedNumbers);
//Find - find the first item that matches from an array.
const foundNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(foundNumber);
//FindIndex - find the index of the first item that matches.
const foundNumberIndex = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(foundNumberIndex);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
