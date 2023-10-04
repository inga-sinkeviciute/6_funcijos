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

console.clear();

function isName(name) {
	if (typeof name !== "string") {
		return 'Klaida: netinkamas duomens tipas, privalo buti "string".';
	}

	const nameMinLength = 2;
	if (name.length < nameMinLength) {
		return `Klaida: per trumpas vardas; minimum ${nameMinLength} simboliai`;
	}

	const nameMaxLength = 20;
	if (name.length > nameMaxLength) {
		return `Klaida: per ilgas vardas; maximum ${nameMaxLength} simboliu`;
	}

	const pirmaRaide = name[0];
	if (pirmaRaide.toUpperCase() !== pirmaRaide) {
		return "Klaida: pirma raide privalo buti didzioji";
	}

	const likusiosRaides = name.slice(1);
	if (likusiosRaides.toLowerCase() !== likusiosRaides) {
		return "Klaida: likusios (apart pirmos) raides privalo buti mazosios";
	}

	// turime leistinu simboliu sarasa
	const abc = "abcdefghijklmnopqrstuvwxyz";
	const nameLowercase = name.toLowerCase();

	// einu per vardo raides
	//      pasiimu viena is vardo raidziu
	//      patikrinu ar ta raide yra leistinu simboliu sarase
	//          jei yra - tesiam darba
	//          jei nera - viskas, radau klaida, baigiam darba

	for (let i = 0; i < name.length; i++) {
		const raide = nameLowercase[i];

		if (!abc.includes(raide)) {
			return `Klaida: neleistinas simbolis varde "${raide}"`;
		}
	}

	return "Ok";
}

console.log(isName());
console.log(isName(undefined));
console.log(isName(null));
console.log(isName(13));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName(true));
console.log(isName(false));
console.log(isName([]));
console.log(isName({}));
console.log(isName(isName));

console.log(isName(""));
console.log(isName("L"));
console.log(isName("Liiiiiiiiiiiiiiiiiiii"));

console.log(isName("maryte"));
console.log(isName("ona"));
console.log(isName("petras"));

console.log(isName("MarYte"));
console.log(isName("OnA"));
console.log(isName("PEtras"));

console.log(isName("Mar9te"));
console.log(isName("On4"));
console.log(isName("P3tras"));
console.log(isName("J nas"));
console.log(isName("9onas"));
console.log(isName("!bile"));
console.log(isName(" bile"));

console.log(isName("Li"));
console.log(isName("Liiiiiiiiiiiiiiiiiii"));
console.log(isName("Jonas"));

console.log(isName("555555555555555555555555555555555"));
