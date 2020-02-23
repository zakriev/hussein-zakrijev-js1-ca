
function textUpdate() {
	const textReplace = document.querySelector(".content");

	textReplace.innerHTML = textReplace.innerHTML.replace(/the /g, "replaced ").replace(/The /g, "Replaced ");
}
setTimeout(textUpdate, 4000);

