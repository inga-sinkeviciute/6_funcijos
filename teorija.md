<!-- Arrow funkcijos. Whaaat? -->

pvz: const dalmuo = (a, b) => {
return a / b;
};

<!-- Jei tik vienas statement - return nereikalingas -->

pvz: const dalmuo1 = (a, b) => a / b;

<!-- jei parametru bloke yra tik vienas parametras, galima nerasyti (). Whaaaat? -->

pvz.
const kvadratu = (a) => a \*\* 2;

tampa

const kvadratu = a => a \*\* 2;

<!-- Ternary, pagaliau pristatytas. Zie zie -->

pvz.
const zinute3 = amzius < limitas ? "Sorry" : "Uzeik";

<!-- Daugiau nei triju nereiktu det, nes nu kam ble. Nestintas ternaris  -->

const q5 = 0 > 1 ? (2 ? 3 : 4) : 5 ? 6 : 7;

<!-- Memory overflow -->
<!-- A memory overflow in JavaScript, commonly referred to as a "memory leak" or "out of memory error," occurs when a JavaScript program uses more memory than is available to it, leading to performance degradation or even the program crashing. This happens when the program allocates memory for objects or data but fails to release that memory when it's no longer needed. -->
