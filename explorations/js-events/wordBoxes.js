var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var text = event.currentTarget.value;
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log("== Event was triggered, text:", text);
  console.log("  -- allWords:", allWords);
}


var wordsInputElem = document.getElementById("words-input");
// wordsInputElem.addEventListener('input', handleNewWordsEntered);
wordsInputElem.addEventListener('change', handleNewWordsEntered);


function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}
