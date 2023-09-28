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
