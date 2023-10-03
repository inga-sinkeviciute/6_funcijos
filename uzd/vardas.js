console.clear();

/*
Duodamas vardas... ar bent tai jau galvojama...
Ka daryti?
- reikia nustatyti, ar dave varda, ar ne?
*/

// Jonas -> true
// Maryte -> true
// 12485 -> false
// labas -> false
// Labas -> true
// Azuolas -> true
// Egle -> true

function looksLikeName(text) {
	// jeigu, pirma raide nera didzioji
	//      graziname: false
	if (text[0] !== text[0].toUpperCase()) {
		return "Klaida: pirma raide privalo buti didzioji";
	}

	// jeigu, visi kiti simboliai, apart pirmo,
	// yra ne mazosios raides
	//      graziname: false
	const likusiosRaides = text.slice(1);
	if (likusiosRaides !== likusiosRaides.toLowerCase()) {
		return "Klaida: visos likusios raides privalo buti mazosios";
	}

	// jeigu, yra simbolis 0, 1, 2 .... 9 (skaitmuo)
	//      graziname: false
	const neleistiniSimboliai = "0123456789_,.?!@#$%^& 👀";
	for (let i = 0; i < neleistiniSimboliai.length; i++) {
		const simbolis = neleistiniSimboliai[i];
		if (text.includes(simbolis)) {
			return `Klaida: "${simbolis}" nera leistinas simbolis`;
		}
	}

	// jeigu, neradau kaip atmesti, kodel "text"
	// negaletu buti tinkamas vardas
	//      graziname: true

	return true;
}

console.log(looksLikeName("Jonas"), true);
console.log(looksLikeName("Maryte"), true);
console.log(looksLikeName("Marytė"), true);
console.log(looksLikeName("labas"), false);
console.log(looksLikeName("AZUOLAS"), false);
console.log(looksLikeName("AzuolaS"), false);
console.log(looksLikeName("AzuOlas"), false);
console.log(looksLikeName("Azuolas"), true);
console.log(looksLikeName("5Azuolas"), false);
console.log(looksLikeName("Azuo5las"), false);
console.log(looksLikeName("Azuolas5"), false);
console.log(looksLikeName("Eg1e"), false);
console.log(looksLikeName("Egl3"), false);
console.log(looksLikeName("Eg_le"), false);
