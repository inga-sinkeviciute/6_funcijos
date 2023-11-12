console.clear();

const tekstas0 = "aaabbb";
const tekstas1 = "vasara";
const tekstas2 = "pavasaris";
const tekstas3 = "labas rytas";
const tekstas4 = "pipiriukai";
const tekstas5 = "aaabbbccddeefghijklmn";

// kori raide tekste pasikartoja dazniausiai?

const abc = {};

for (const letter of tekstas5) {
	if (abc[letter]) {
		abc[letter] += 1;
	} else {
		abc[letter] = 1;
	}
}

let maxCount = 0;

for (const letter in abc) {
	if (abc[letter] > maxCount) {
		maxCount = abc[letter];
	}
}

const letters = [];

for (const letter in abc) {
	if (abc[letter] === maxCount) {
		letters.push(letter);
	}
}

console.log(">>>", letters);
