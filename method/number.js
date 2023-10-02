console.log(isFinite(5));
console.log(isFinite(-1));
console.log(isFinite(0));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

const a = true;

if (isFinite(a)) {
	console.log("Taip");
} else {
	console.log("Ne");
}

// isFinite naudingas su Infinity ir NaN, kitur kinda jau zinai, kad skaicius and shit

console.log(Number.isFinite(5));

const b = true;

if (isFinite(b)) {
	if (Number.isInteger(b)) {
		console.log("Sveikasis skaicius");
	} else {
		console.log("Desimtainis skaicius"); // Added 'console.log' here
	}
} else {
	console.log("Nenormalus skaicius: NaN arba Infinity");
}

console.clear();

console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(Number.parseInt("penki"));
console.log(Number.parseInt(5));
console.log(Number.parseInt("12qw"));
console.log(Number.parseInt("123.456"));

const kaina = 3.14;
console.log(kaina, "3.14");
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(10);
console.log(keistasSkaicius2);

// js strings methods
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

https: console.log("labas".length);
console.log("     ".length);
console.log("\n'\\".length);

console.log("labas"[0], "labas".at(0));
console.log("labas"[1], "labas".at(1));
console.log("labas"[2], "labas".at(2));
console.log("labas"[3], "labas".at(3));
console.log("labas"[4], "labas".at(4));
console.log("labas"[5], "labas".at(5));

// charCodeAt
// concat

const abc = ["a", "b", "c", "d", "e", "f"];

const start = "Abecele: ";

// tritaskis pries masyva isvardina visas ten esancias reiksmes su concat

// 0123456
console.log("Labas Rytas".indexOf("a"));
console.log("Labas Rytas".indexOf("A"));
console.log("Labas Rytas".indexOf(" "));
console.log("Labas Rytas".indexOf("ab"));
console.log("Labas Rytas".indexOf("as"));
console.log("Labas Rytas".indexOf("labas"));
console.log("Labas, labas Rytas".indexOf("a", 2));

//  function kiek(tekstas, raide){return 0;}, console.log(kiek('labas', 'a));. Naudoti tik for ir if. Ir ta pacia ideja galima pabandyti su indexOf
