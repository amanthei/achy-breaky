var gist = document.querySelector('.gist-meta');

function replaceText() {
	if (gist) {
		var newText = gist.innerHTML.replace('with ❤ ', '');
		gist.innerHTML = newText;
	}
}
replaceText();
