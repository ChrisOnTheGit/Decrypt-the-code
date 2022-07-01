// setTimeout(() => {
//     document.body.style.backgroundColor="rgb(0, 0, 0)"
// }, 3000);
const countMe = () => {
	let count = 0;
	setInterval(() => {
		let counter = document.getElementById("theCounter");
		let doubleCount = count*2
		document.body.style.backgroundColor = `rgb(${doubleCount / 10},${
			doubleCount / 40
		},${count / 10})`;
		counter.innerHTML = `Count: ${count} <br>Double: ${doubleCount}`;
		console.log(count);
		count++;
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
