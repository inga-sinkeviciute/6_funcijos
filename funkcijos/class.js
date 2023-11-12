console.clear();

class Dog {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.age = 0;
	}

	setAge(naujasAmzius) {
		if (typeof naujasAmzius !== "number") {
			return "Error: turi buti skaicius.";
		}

		this.age = naujasAmzius;
		return naujasAmzius;
	}

	hello() {
		return `Au au, as esu ${this.name}!`;
	}
}

const rex = new Dog("Rex", "black");
const brisius = new Dog("Brisius", "white");

rex.age = "labas";

console.log(rex.setAge(7));
console.log(rex.setAge(5));
console.log(rex.setAge(13));
console.log(rex.setAge(true));

console.log(rex);

console.log(rex.hello());
console.log(brisius.hello());
