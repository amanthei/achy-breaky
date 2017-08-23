var gist = document.querySelectorAll('.gist-meta');

function replaceText() {
	if (gist) {
		Array.prototype.forEach.call(gist, function(el, i) {
			console.log(gist);
			var newText = gist[el, i].innerHTML.replace('with ❤ ', '');
			gist[el, i].innerHTML = newText;
		});
	}
}
replaceText();
