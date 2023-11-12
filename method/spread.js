console.clear();

const a = [1, 2, 3];

const b = [...a];
a[0] = 111;

const c = ["a", ...a, "b", ...a, "c"];

console.log(a);
console.log(b);
console.log(c);

const user = {
	name: "Jonas",
	age: 99,
	isMarried: true,
};

const user2 = {
	...user,
	favoriteColor: "red",
	name: "Maryte",
};

user.age = 50;

console.log(user);
console.log(user2);
