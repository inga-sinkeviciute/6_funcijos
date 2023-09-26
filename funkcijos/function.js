// perpanaudojamas logikos blokas

function tuscia() {
	// logikos blokas
}

const a = tuscia();
console.log(a);

function duokPenkis() {
	return 5;
}
console.log(duokPenkis());

function arVedes() {
	return true;
}
console.log(arVedes());

// 1###
const userName1 = "Jonas";
const userAge1 = 99;

// Jonas turejo 9 jubiiejus
const user1Jubiliejai = (userAge1 - (userAge1 % 10)) / 10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubilieju/-s`;
console.log(user1Str);

console.clear();

function jubiliejai(username, age) {
	const count = (age - (age % 10)) / 10;
	return `${username} turejo ${count} jubiliejus`;
}

console.log(jubiliejai("Jonas", 30));
console.log(jubiliejai("Adele", 40));

function studentAverage(name, marks) {
	let totalSum = 0;
	let i = 0;
	totalSum += marks[i++];
	totalSum += marks[i++];
	totalSum += marks[i++];
	totalSum += marks[i++];
	totalSum += marks[i++];

	const average = totalSum / marks.length;
	return `${name}: pazymiu vidurkis yra ${average}`;
}

console.log(studentAverage("Jonas", [10, 8, 7, 5, 7]));
