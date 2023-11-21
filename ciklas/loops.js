console.clear();

// for
const marks = [10, 2, 8, 4, 6];

let sumFor = 0;

for (let i = 0; i < marks.length; i++) {
	const mark = marks[i];
	sumFor += mark;
}

console.log("FOR: sum =", sumFor);

// FOR-OF

let sumForOf = 0;

for (const mark of marks) {
	sumForOf += mark;
	sumForOf++;
}

console.log("FOR-OF: sum =", sumForOf);

// while

let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
	const mark = marks[iWhile];
	sumWhile += mark;
	iWhile++;
}
console.log("WHILE: sum =", sumWhile);

// DO-WHILE

let sumDoWhile = 0;
let iDoWhile = 0;
do {
	const mark = marks[iDoWhile];
	sumDoWhile += mark;
	iDoWhile++;
} while (iDoWhile < marks.length);

console.log("DO-WHILE: sum =", sumDoWhile);
