console.clear();
/*
Duodamas tekstas.
Jame yra tarpai.
Ka reikia padaryti?
- pradzioje nebutu tarpu;
- pabaigoje nebutu tarpu;
- jei tarp zodziu yra is eiles einanciu daugiau nei vienas tarpas, tai turi likti tik 1 tarpas;
*/

const str1 = "    labas    ";
const ats1 = "labas";

const str2 = "    labas                           rytas         tau    ";
const ats2 = "labas rytas tau";

const str3 = "ka   tu?   ka vakare?";
const ats3 = "ka tu? ka vakare?";

function isvalymas(text) {
	let ats = text.trim();

	for (; ats.includes("  "); ) {
		ats = ats.replaceAll("  ", " ");
	}

	return ats;
}

console.log("---------");
console.log(isvalymas(str1));
console.log(ats1);
console.log("---------");
console.log(isvalymas(str2));
console.log(ats2);
console.log("---------");
console.log(isvalymas(str3));
console.log(ats3);
console.log("---------");
console.log(isvalymas("   abra    ka dabra"));
console.log("abra ka dabra");
