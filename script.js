// logic for machine 1: Replace All Spaces with No Space
const inputfield1 = document.getElementById('inputfield1');
const replaceButton1 = document.getElementById('replacebtn1');
const outputResult1 = document.getElementById('outputResult1');

// Logic for Machine problem 4
const inputfield2 = document.getElementById('inputfield2'); 
const replaceButton2 = document.getElementById('countbtn2'); 
const outputResult2 = document.getElementById('outputCount2');

//MP 1
function replaceSpaces() {
    let originalText = inputfield1.value;
    originalText = originalText.trim();
    const resultText = originalText.replace(/ /g, '');
    outputResult1.value = resultText;
}

//MP 2
function countCharacters() {
    const originalText = inputfield2.value;
    const trimmedText = originalText.trim();
    const charCount = trimmedText.length;
    outputCount2.value = charCount; 
}

replaceButton1.addEventListener('click', replaceSpaces);
replaceButton2.addEventListener('click', countCharacters);