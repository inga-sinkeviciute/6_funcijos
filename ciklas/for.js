// for

let a = 0;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);

// ir t.t. boring taip po viena klijuoti

for (let i = 0; i < 5; i++) {
	console.log("labas");
}

console.clear();

for (let f = 0; f < 10; f++) {
	const sentence = `The number is: ${f + 1}`;
	console.log(sentence);
}

console.clear();

// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.

const s = 3;
const f = 8;
let sequence = "";

for (let i = s; i <= f; i++) {
	sequence += " " + i;
}

const arr = `Skaiciai intervale nuo ${s} iki ${f} imtinai yra:${sequence}`;
console.log(arr);

for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

console.clear();

let i = 0;

for (; i <= 10; ) {
	console.log(i);
	i += 2;
}
console.log(i, "uz ciklo");

console.clear();

function arTestiCikla(index) {
	if (index <= 10) {
		return true;
	} else {
		return false;
	}
}

for (let i = 0; arTestiCikla(i); i += 2) {
	console.log(i, "ciklas");
}

console.clear();

const word = "zodelis";

console.log(`Raide: ${word[0]}`);
console.log(`Raide: ${word[1]}`);
console.log(`Raide: ${word[2]}`);
console.log(`Raide: ${word[3]}`);
console.log(`Raide: ${word[4]}`);

for (let i = 0; i < word.length; i++) {
	console.log(i, `Raide: ${word[i]}`);
}
console.clear();

const marks = [10, 2, 8, 4, 6];
let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < amount; i++) {
	const mark = marks[i];
	totalSum += mark;
	console.log(`${i}, mark, '=`, totalSum);
}

const average = totalSum / amount;
console.log(marks, "average is", average);

// things to know about for functions:
// for loop consists of three parts: initialization, condition, and increment (or decrement)

// Initialization:
// The initialization part (let i = 0) runs only once at the beginning and is used to set up the loop variable.
// Condition:
// The condition part (i < 5) is evaluated before each iteration. If it evaluates to true, the loop continues; otherwise, it terminates.
// Increment (or Decrement):
// The increment part (i++) is executed at the end of each iteration and is used to update the loop variable. You can also use i-- for decrementing.

// Loop Control:

// To exit a for loop prematurely, you can use the break statement.
const numbers = [2, 4, 7, 1, 9, 3];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 5) {
		console.log(`Found a number greater than 5: ${numbers[i]}`);
		break; // Exit the loop
	}
}

// To skip the current iteration and continue with the next one, you can use the continue statement.

const numbers1 = [2, 4, 7, 1, 9, 6];

for (let i = 0; i < numbers1.length; i++) {
	if (numbers1[i] % 2 !== 0) {
		continue; // Skip the current iteration for odd numbers
	}
	console.log(`Even number: ${numbers1[i]}`);
}

console.clear();

// Praktikavimosi uzdavinukai:

// Write a program that uses a for loop to print numbers from 1 to N, where N is a variable you can set.

const n = 10;
for (let i = 0; i < n; i++) {
	console.log(i);
}

// Use a for loop to calculate the sum of numbers from 1 to N.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers2.length; i++) {
	const amount = numbers2[i];
	sum += amount;
	console.log(`Total sum of all numbers: ${sum}`);
}
