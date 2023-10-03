// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.clear();

console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(0));
console.log(isFinite(99999999999990));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

const a = null;

if (isFinite(a)) {
	console.log("Taip");
} else {
	console.log("Ne");
}

console.clear();
console.log(Number.isFinite(5));
console.log(isFinite(5));
console.log(Number.isInteger(5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

console.clear();

const b = NaN;

if (isFinite(b) && Number.isInteger(b)) {
	console.log("Sveikasis skaicius");
} else if (isFinite(b) && !Number.isInteger(b)) {
	console.log("Desimtainis skaicius");
} else {
	console.log("Ne normalus skaicius: NaN arba Infinity");
}

if (isFinite(b)) {
	if (Number.isInteger(b)) {
		console.log("Sveikasis skaicius");
	} else {
		console.log("Desimtainis skaicius");
	}
} else {
	console.log("Ne normalus skaicius: NaN arba Infinity");
}

console.clear();

console.log(parseInt(false));
console.log(parseInt([]));
console.log(parseInt(""));
console.log(parseInt("penki"));
console.log(parseInt("123"));
console.log(parseInt("asd123"));
console.log(parseInt("123asd"));
console.log(parseInt("123asd456"));
console.log(parseInt("123.456"));
console.log(parseInt("Infinity"));

console.log("---------------");
console.log(parseFloat(""));
console.log(parseFloat("789"));
console.log(parseFloat("789.101"));
console.log(parseFloat("-789"));
console.log(parseFloat("-789.101"));
console.log(parseFloat("Infinity"));
console.log(parseFloat("-789.101asd"));
console.log(parseFloat("asd-789.101asd"));
console.log(parseFloat("-asd789.101asd"));

console.clear();

console.log(isNaN(5));
console.log(isNaN(3.14));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));

console.clear();

const kaina = 3.14;
console.log(kaina, "3.14");
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(3));
console.log(kaina.toFixed(4));
console.log(kaina.toFixed(5));

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(10);
console.log(keistasSkaicius2);

const keistasSkaicius3 = parseInt(keistasSkaicius2);
console.log(keistasSkaicius3);

const keistasSkaicius4 = parseFloat(keistasSkaicius2);
console.log(keistasSkaicius4);

const keistasSkaicius5 = +"1.23";
console.log(keistasSkaicius5);

const keistasSkaicius6 = +keistasSkaicius2;
console.log(keistasSkaicius6);

const c = 6.999999999999999;
console.log(c);
console.log(c.toFixed(5));

const d = 5.6789;
console.log(d.toFixed(6));
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));

const e = 5.6784;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));
