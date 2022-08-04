// setTimeout(() => {
//     document.body.style.backgroundColor="rgb(0, 0, 0)"
// }, 3000);
const countMe = () => {
	let count = 0;
	let r = 0;
	let g = 0;
	let b = 0;

	setInterval(() => {
		// counter.innerHTML = `Count: ${count} <br>Double: ${doubleCount}`;
		console.log(count);
		count++;
		if (count < 255) {
			r += 1;
		} else if (count > 255 && count < 510) {
			r=0
			g += 1;
		} else {
			b += 1;
		}
		if (b > 255) {
			(count = 0), (r = 0), (g = 0), (b = 0);
		}
		document.getElementById(
			"blackhole"
		).style.border = `rgb(${b},${r}, ${g}) solid 3px`;
		document.body.style.backgroundColor = `rgb(${r},${g}, ${b})`;
	}, 1);
};

const decrypt = () => {
	// Decrypt
	let ciphertext = document.getElementById("message2").value;
	let password = document.getElementById("password2").value;
	var bytes = CryptoJS.AES.decrypt(ciphertext, password);
	var originalText = bytes.toString(CryptoJS.enc.Utf8);
	console.log("orig", originalText); // 'my message'
	document.getElementById("results2").innerHTML = originalText;
	return originalText;
};
const encrypt = () => {
	let message = document.getElementById("message").value;
	let password = document.getElementById("password").value;
	ciphertext = CryptoJS.AES.encrypt(message, password).toString();
	var ciphertextObject = CryptoJS.AES.encrypt(
		JSON.stringify(message),
		password
	).toString();
	console.log("ciphertext", ciphertext); // 'my message'
	document.getElementById("results").innerHTML = ciphertext;

	decrypt(password, ciphertext); //test decrypt out
	return ciphertext;
};
// document.body.addEventListener("mousemove", function (e) {
// 	let div = document.body;
// 	x = e.offsetX;
// 	y = e.offsetY;
// 	div.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
// 	let header = document.getElementById("header");
// header.style.color = `rgb(${y}, ${x}, ${y - x})`;
// });

