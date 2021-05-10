var markovExample = new MarkovText(3);

function outputFromModel() {
	var node  = document.getElementById('textAreaInput'),
	htmlContent = node.innerHTML,
	textContent = node.textContent;
//	console.log(textContent)
	markovExample.learn(document.getElementById('textAreaInput').textContent);
	var markovOutput = markovExample.output(document.getElementById('numberOfWords').value);
	document.getElementById('textAreaOutput').classList.remove("hide");
	document.getElementById('textAreaOutput').innerHTML = markovOutput + `.  <br>
	<a href=""><3CLAIM THIS READING<3</a>
	`;

	document.getElementById('face').classList.add("hide");
	document.getElementById('realface').classList.remove("hide");
	var element = document.getElementById("center");
  element.classList.add("hide");
	console.log("hey")
}
