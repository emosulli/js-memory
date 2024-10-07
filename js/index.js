console.log('hello');

//define name and show it on screen
const name = 'Hermione';
const nameElement = document.getElementById('name');
nameElement.textContent = name;

//define age and show on screen
const age = 11;
const ageElement = document.getElementById('age');
ageElement.textContent = age;

//create css classes for is good or not
//show the right word/class styles on the screen, depending
const isGood = true;
const goodClass = isGood ? 'good' : 'not-good'
const isGoodElement = document.getElementById('is-good');
isGoodElement.textContent = isGood;
isGoodElement.className = goodClass;