console.clear();

const zodynas = ["labas", "rytas", "Lietuva", "dar", "idomiau"];

function pakeisk(zodis, idx) {
	return `<div>${idx + 1}) ${zodis}</div>`;
}

const html = zodynas.map(pakeisk);
console.log(html);

const html2 = zodynas.map((zodis, idx) => {
	return `<div>${idx + 1}) ${zodis}</div>`;
});
console.log(html2);
