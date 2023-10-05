console.clear();

const n1 = 7;
const n2 = 5;

function suma(a, b) {
	return a + b;
}

console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);

function skirtumas(a, b) {
	return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// kintamajam priskirti anonimine funkcija

const skirtumas1 = function (a, b) {
	return a - b;
};
console.log(`${n1} - ${n2} = ${skirtumas1(n1, n2)}`);

// let kaDaryti = null;
// kaDaryti = function(){};

// arrow funkcija. Tarp parametru ir logikos bloko idedi rodyklyte.

const sandauga = (a, b) => {
	return a * b;
};

console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

const dalmuo = (a, b) => {
	return a / b;
};

console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);

// arrow funkcija su salygomis.
// Jei logikos bloke yra tik vienas statement
// tai galime nerasyti {return}

const dalmuo1 = (a, b) => a / b; //wawavyva

console.log(`${n1} / ${n2} = ${dalmuo1(n1, n2)}`);

// jei parametru bloke yra tik vienas parametras, galima nerasyti ()

const kvadratu = (a) => a ** 2;

console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);

// funkcija gauna zodi, bet grazina tik pirma raide. Cia biski freestylin.. waka waka

const pirmaRaide = (word) => word[0];

console.log(pirmaRaide(5));
console.log(pirmaRaide(""));

const firstLetter = (str) => {
	if (typeof str !== "string") {
		return "Error";
	}
	if (str.length === 0) {
		return "Error";
	}
	return str[0];
};
console.clear();

const errors = {
	notString: "Error: first param - a string type.",
	empty: "Error: first param - non emplty string value",
};

const firstLetter5 = (str) => {
	const msg =
		typeof str !== "string"
			? "Error: has to be a string"
			: str.length
			? str[0]
			: errors.empty;

	return msg;
};

console.log(firstLetter5(5));
console.log(firstLetter5(""));
console.log(firstLetter5("Labas"));
