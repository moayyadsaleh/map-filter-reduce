import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

var numbers = [3, 56, 2, 48, 5];

//function square(num) {
//return num * num;
//}

//const newNumbers = numbers.map((num) => num * num);
//console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(function (x) {
  return x * 2;
});

const newArrowFunction = numbers.map((x) => x * 2);

///Filter - Create a new array by keeping the items that return true.
const newNumbersWithFkilter = numbers.filter(function (num) {
  return num < 10;
});

const newNumberWithArrowFunction = numbers.filter((num) => num > 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

var newNumberReduced = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

//Find - find the first item that matches from an array.
const newNumber = numbers.find(function (num) {
  return num > 10;
});
const newFoundNumber = numbers.find((num) => num > 10);
//FindIndex - find the index of the first item that matches.
const newNumber = numbers.findIndex(function (num) {
  return num > 10;
});

const newIndexedNumber = numbers.findIndex(num <= num < 10);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
