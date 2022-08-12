'use strict';

const button = document.getElementById('btn');
const inputRange = document.getElementById('range');
const textRange = document.getElementById('range-span');
const inputText = document.getElementById('text');
const textSpan = document.getElementById('text-span');

const square = document.getElementById('square');
const circle = document.getElementById('circle');
const ebtn = document.getElementById('e_btn');

const log = function () {
  console.log('rkbr');
};

const getColor = function () {
  let color = inputText.value;
  square.style.backgroundColor = color;
};

button.addEventListener('click', getColor);


textRange.textContent = inputRange.value;

inputRange.addEventListener('input', function (e) {
  ebtn.style.display = 'none';
  textRange.textContent = e.target.value;

  circle.style.height = e.target.value + '%';
  circle.style.width = e.target.value + '%';
});

console.log(button);
console.dir(inputRange);
console.log(textRange);
console.dir(inputText);
console.log(textSpan);
console.dir(square);


