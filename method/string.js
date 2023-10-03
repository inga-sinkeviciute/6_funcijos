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
