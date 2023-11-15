const text = `
We're no strangers to love
You know the rules and so do I (do I)
A full commitment's what I'm thinking of
You wouldn't get this from any other guy

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but you're too shy to say it (say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it

And if you ask me how I'm feeling
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but you're too shy to say it (to say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`;

// Rasti ne tuščių eilučių kiekį;
// Rasti žodžių kiekį;
// Rasti ilgiausia eilutę ir gražinti jos tekstą;
// Rasti ilgiausios eilutės raidžių kiekį;
// Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);
// Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);
// Rasti unikalių raidžių kiekį;
// Rasti unikalių žodžių kiekį;
// Rasti žodžių su apostrofu kiekį;

// Papildomai: perrašyti, jog tai būtų SongAnalizer klasė
// Turėtų parametrą: pridėti "case sensitivity" parametrą, kuris pagal nutylėjimą yra "false"
// Turėtų parametrą: kuris pakeičia žodžių skaičiavimo tvarką ir trumpiniai traktuojami kaip pilni žodžiai, pvz.: don't = do not;

class SongAnalyzer {
	constructor(text, caseSensitive = false) {
		this.text = text;
		this.caseSensitive = caseSensitive;
	}

	countNonEmptyLines() {
		const nonEmptyLines = this.text
			.split("\n")
			.filter((line) => line.trim() !== "");
		return nonEmptyLines.length;
	}

	countWords() {
		const words = this.caseSensitive
			? this.text.match(/\b\w+\b/g)
			: this.text.match(/\b\w+\b/gi);
		return words ? words.length : 0;
	}

	findLongestLine() {
		const lines = this.text.split("\n");
		const longestLine = lines.reduce(
			(longest, current) =>
				current.length > longest.length ? current : longest,
			""
		);
		return longestLine;
	}

	findLongestLineLength() {
		const longestLine = this.findLongestLine();
		return longestLine.length;
	}

	findMostCommonLetter() {
		const letters = this.text.replace(/[^a-zA-Z]/g, "").split("");
		const letterCount = {};

		letters.forEach((letter) => {
			const key = this.caseSensitive ? letter : letter.toLowerCase();
			letterCount[key] = (letterCount[key] || 0) + 1;
		});

		const mostCommonLetter = Object.keys(letterCount).reduce((a, b) =>
			letterCount[a] > letterCount[b] ? a : b
		);
		return mostCommonLetter;
	}

	findMostCommonWord() {
		const words = this.caseSensitive
			? this.text.match(/\b\w+\b/g)
			: this.text.match(/\b\w+\b/gi);
		const wordCount = {};

		words.forEach((word) => {
			const key = this.caseSensitive ? word : word.toLowerCase();
			wordCount[key] = (wordCount[key] || 0) + 1;
		});

		const mostCommonWord = Object.keys(wordCount).reduce((a, b) =>
			wordCount[a] > wordCount[b] ? a : b
		);
		return mostCommonWord;
	}

	countUniqueLetters() {
		const uniqueLetters = [
			...new Set(this.text.replace(/[^a-zA-Z]/g, "").split("")),
		];
		return uniqueLetters.length;
	}

	countUniqueWords() {
		const words = this.caseSensitive
			? this.text.match(/\b\w+\b/g)
			: this.text.match(/\b\w+\b/gi);
		const uniqueWords = [...new Set(words)];
		return uniqueWords.length;
	}

	countWordsWithApostrophe() {
		const wordsWithApostrophe = this.caseSensitive
			? this.text.match(/\b\w+'\w+\b/g)
			: this.text.match(/\b\w+'\w+\b/gi);
		return wordsWithApostrophe ? wordsWithApostrophe.length : 0;
	}
}

// Example usage:
const songAnalyzer = new SongAnalyzer(text);
console.log(songAnalyzer.countNonEmptyLines());
console.log(songAnalyzer.countWords());
console.log(songAnalyzer.findLongestLine());
console.log(songAnalyzer.findLongestLineLength());
console.log(songAnalyzer.findMostCommonLetter());
console.log(songAnalyzer.findMostCommonWord());
console.log(songAnalyzer.countUniqueLetters());
console.log(songAnalyzer.countUniqueWords());
console.log(songAnalyzer.countWordsWithApostrophe());
