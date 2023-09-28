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
