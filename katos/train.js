// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
	// Base case: If 'n' is a single-digit number, return it
	if (n < 10) {
		return n;
	}

	// Convert 'n' to a string to work with its digits
	const nStr = n.toString();

	// Initialize a variable to store the sum of digits
	let sum = 0;

	// Iterate through each character (digit) in 'nStr'
	for (let i = 0; i < nStr.length; i++) {
		// Convert the character (digit) back to a number and add it to 'sum'
		sum += parseInt(nStr[i]);
	}

	// Recursively call 'digitalRoot' with the sum as the new input
	return digitalRoot(sum);
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text.

function likes(names) {
	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]}, and ${names[2]} like this`;
	} else {
		const othersCount = names.length - 2;
		return `${names[0]}, ${names[1]}, and ${othersCount} others like this`;
	}
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
	const areaCode = numbers.slice(0, 3).join("");
	const exchangeCode = numbers.slice(3, 6).join("");
	const subscriberNumber = numbers.slice(6).join("");

	const formattedNumber = `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;

	return formattedNumber;
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
	const binaryString = n.toString(2); // Convert to binary string
	const count = (binaryString.match(/1/g) || []).length; // Count '1's in the string
	return count;
};

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
	// Initialize variables to track the counts of even and odd numbers
	let evenCount = 0;
	let oddCount = 0;
	let evenSum = 0;
	let oddSum = 0;

	// Iterate through the first three numbers to determine majority parity
	for (let i = 0; i < 3; i++) {
		if (integers[i] % 2 === 0) {
			evenCount++;
			evenSum += integers[i];
		} else {
			oddCount++;
			oddSum += integers[i];
		}
	}

	// Determine the majority parity (even or odd)
	const isMajorityEven = evenCount > oddCount ? true : false;

	// Iterate through the array to find the outlier based on the majority parity
	for (let i = 0; i < integers.length; i++) {
		if (isMajorityEven && integers[i] % 2 !== 0) {
			return integers[i];
		} else if (!isMajorityEven && integers[i] % 2 === 0) {
			return integers[i];
		}
	}

	// Return an error message if no outlier is found
	return "No outlier found";
}

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
	// Create an object to store the counts of characters (case-insensitive)
	const charCounts = {};

	// Convert the input string to lowercase for case-insensitive comparison
	const lowercaseText = text.toLowerCase();

	// Initialize a counter for duplicate characters
	let duplicateCount = 0;

	// Iterate through each character in the lowercase string
	for (let i = 0; i < lowercaseText.length; i++) {
		const char = lowercaseText[i];

		// Increment the count for the character in the object
		charCounts[char] = (charCounts[char] || 0) + 1;

		// If the count reaches 2, increment the duplicate count
		if (charCounts[char] === 2) {
			duplicateCount++;
		}
	}

	return duplicateCount;
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
	// Create an object to store the counts of characters (case-insensitive)
	const charCounts = {};

	// Convert the input word to lowercase for case-insensitive comparison
	const lowercaseWord = word.toLowerCase();

	// Initialize an empty result string
	let result = "";

	// Iterate through each character in the lowercase word
	for (let i = 0; i < lowercaseWord.length; i++) {
		const char = lowercaseWord[i];

		// Increment the count for the character in the object
		charCounts[char] = (charCounts[char] || 0) + 1;
	}

	// Iterate through the original word to construct the result string
	for (let i = 0; i < word.length; i++) {
		const char = lowercaseWord[i];

		// Determine whether the character appears only once or more than once
		if (charCounts[char] === 1) {
			result += "("; // Character appears only once
		} else {
			result += ")"; // Character appears more than once
		}
	}

	return result;
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
	// Initialize coordinates (x, y) at the starting point (0, 0)
	let x = 0;
	let y = 0;

	// Iterate through the directions in the walk array
	for (let direction of walk) {
		switch (direction) {
			case "n":
				y++; // Move north
				break;
			case "s":
				y--; // Move south
				break;
			case "e":
				x++; // Move east
				break;
			case "w":
				x--; // Move west
				break;
		}
	}

	// Check if you end up at the starting point and took exactly ten minutes
	return walk.length === 10 && x === 0 && y === 0;
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
	let count = 0;

	while (num >= 10) {
		let product = 1;

		// Split the number into its digits and multiply them
		while (num > 0) {
			const digit = num % 10;
			product *= digit;
			num = Math.floor(num / 10);
		}

		num = product; // Set the product as the new number
		count++;
	}

	return count;
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str) {
	// Split the input string into an array of words
	const words = str.split(/[-_]/);

	// Capitalize the first word if it was capitalized in the original string
	let result = words[0];

	// Capitalize the remaining words and append them to the result
	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
		result += capitalizedWord;
	}

	return result;
}

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
	const nonZeros = [];
	let zeroCount = 0;

	for (const element of arr) {
		if (element !== 0) {
			nonZeros.push(element);
		} else {
			zeroCount++;
		}
	}

	// Append zeros to the end based on the count
	for (let i = 0; i < zeroCount; i++) {
		nonZeros.push(0);
	}

	return nonZeros;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
	// Ensure the values are within the valid range
	r = Math.max(0, Math.min(255, r));
	g = Math.max(0, Math.min(255, g));
	b = Math.max(0, Math.min(255, b));

	// Convert decimal values to hexadecimal with leading zeros and in uppercase
	const hexR = r.toString(16).padStart(2, "0").toUpperCase();
	const hexG = g.toString(16).padStart(2, "0").toUpperCase();
	const hexB = b.toString(16).padStart(2, "0").toUpperCase();

	// Concatenate the hexadecimal values
	return hexR + hexG + hexB;
}

console.log(rgb(255, 0, 0)); // Output: "FF0000"
console.log(rgb(0, 128, 255)); // Output: "0080FF"
console.log(rgb(300, 255, 100)); // Output: "FFFF64" (values are rounded to 255, 255, 100)

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
	// Convert the integer to an array of digits
	const digits = Array.from(String(n), Number);

	// Find the pivot (first digit that is smaller than the next)
	let i = digits.length - 1;
	while (i > 0 && digits[i] <= digits[i - 1]) {
		i--;
	}

	// If there's no pivot, return -1
	if (i === 0) {
		return -1;
	}

	// Find the smallest digit to the right of pivot that is larger than pivot
	let j = digits.length - 1;
	while (digits[j] <= digits[i - 1]) {
		j--;
	}

	// Swap pivot and swapDigit
	[digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

	// Sort all digits to the right of pivot in ascending order
	const sortedRight = digits.slice(i).sort((a, b) => a - b);

	// Concatenate the left, swapped, and sorted right portions and convert to an integer
	const result = [...digits.slice(0, i), ...sortedRight].join("");

	return parseInt(result, 10);
}

console.log(nextBigger(12)); // Output: 21
console.log(nextBigger(513)); // Output: 531
console.log(nextBigger(2017)); // Output: 2071
console.log(nextBigger(9)); // Output: -1
console.log(nextBigger(111)); // Output: -1
console.log(nextBigger(531)); // Output: -1
