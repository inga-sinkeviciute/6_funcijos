// perpanaudojamas logikos blokas

function tuscia() {
	// logikos blokas
}

// Kodo sablonai
// IF FUNKCIJOS
// if (){}
// if (){} else {}
// if (){} else {}if (){}
// if (){} else if(){}else {}

// ctrl+h(pakeicia viska ka norejai, cool shit)
// Ctrl + D: Select the next occurrence of the current word.
// Ctrl + U: Undo the last cursor operation.

// Palyginimo operatoriai
// <, >, <=, >=, ===, ==, !=, !==

// pasizureti kaip ten darosi su scriptais

// palyginimo operatoriai:
//  <,>, ==, ===, <=, >=, !=, !==

// Loginiai operatoriai:
//  &&, ||, !(priesingai reiksmei)

// const a = tuscia();
// console.log(a);

// function duokPenkis() {
// 	return 5;
// }
// console.log(duokPenkis());

// function arVedes() {
// 	return true;
// }
// console.log(arVedes());

// 1###
const userName1 = "Jonas";
const userAge1 = 99;

// Jonas turejo 9 jubiliejus
const user1Jubiliejai = (userAge1 - (userAge1 % 10)) / 10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubilieju/-s`;
console.log(user1Str);

// console.clear();

// function jubiliejai(username, age) {
// 	const count = (age - (age % 10)) / 10;
// 	return `${username} turejo ${count} jubiliejus`;
// }

// console.log(jubiliejai("Jonas", 30));
// console.log(jubiliejai("Adele", 40));

// function studentAverage(name, marks) {
// 	let totalSum = 0;
// 	let i = 0;
// 	totalSum += marks[i++];
// 	totalSum += marks[i++];
// 	totalSum += marks[i++];
// 	totalSum += marks[i++];
// 	totalSum += marks[i++];

// 	const average = totalSum / marks.length;
// 	return `${name}: pazymiu vidurkis yra ${average}`;
// }

// console.log(studentAverage("Jonas", [10, 8, 7, 5, 7]));

// console.clear();

// if (4 > 2) {
// 	console.log("4 yra daugiau uz 2");
// }

// if (true) {
// 	console.log(true);
// }

//realiai false yra, nes neteisingu reiksmiu nespausdina, ne kaip boolean veikia

// if (false) {
// 	console.log(false);
// }

// const a1 = 7;
// const b1 = 5;

// if (a1 > b1) {
// 	console.log("A1 yra daugiau uz B1");
// } else {
// 	console.log("A1 nera daugiau uz B1");
// }

// const day = 1;

// if (day == 1) {
// 	console.log("Pirmadienis");
// }

// if (day == 2) {
// 	console.log("Antradienis");
// }

// if (day == 3) {
// 	console.log("Treciadienis");
// }

// if (day == 4) {
// 	console.log("Ketvirtadienis");
// }

// if (day == 5) {
// 	console.log("Penktadienis");
// }

// if (day == 6) {
// 	console.log("Sestadienis");
// }

// if (day == 7) {
// 	console.log("Sekmadienis");
// } else {
// 	console.log("Tokia diena neegzistuoja!");
// }

// const day = 3;

// kodo nestinimas (reiktu tik pataisyti rasant else{if({})})

// if (day == 1) {
// 	console.log("Pirmadienis");
// } else if (day === 2) {
// 	console.log("Antradienis");
// } else if (day === 3) {
// 	console.log("Treciadienis");
// } else if (day === 4) {
// 	console.log("Ketvirtadienis");
// } else if (day === 5) {
// 	console.log("Penktadienis");
// } else if (day === 6) {
// 	console.log("Sestadienis");
// } else if (day === 7) {
// 	console.log("Sekmadienis");
// } else {
// 	console.log("Tokia diena neegzistuoja!");
// }

const parosMetas = "diena";
const arLyja = false;
const temp = 25;

if (parosMetas === "diena" && arLyja === true) {
	console.log("Einam sokti lietuje");
} else if (parosMetas === "diena" && arLyja === false) {
	console.log("Eiline diena rojuje");
} else if (parosMetas === "naktis" && arLyja === true) {
	console.log("Sedim namie");
}

if (parosMetas === "diena") {
	if (arLyja) {
		console.log("Einam sokti lietuje");
	} else {
		console.log("Eiline diena rojuje");
	}
}

// const g = 5;
// const h = 7;

// if (g > h) {
// 	console.log("Daugiau");
// } else {
// 	console.log("Ne maziau");
// }

// if (g >= h) {
// 	console.log("Daugiau ar lygu");
// } else {
// 	console.log("Maziau");
// }

// _______________________;

const user = {
	name: "Jonas",
	age: 99,
};

user.name;
user["name"];

const abc = {
	65: "a",
};

abc[65];

if (abc[65] === "a") {
	console.log("aaaaaa");
} else {
	console.log("bbbbb");
}

// Uzduotys:
// Even or Odd Number:
// Write a program that checks if a given number is even or odd and prints the result.

const number = 10;

if (number % 2 === 0) {
	console.log("number is even");
} else {
	console.log("number is odd");
}

// Largest Number:
// Given two numbers, find and print the largest one using an if statement.

const one = 15;
const two = 59;
if (one > two) {
	console.log(`${one} yra didziausias skaicius`);
} else {
	console.log(`${two} yra didziausias skaicius`);
}
