

const decrementRefBtn = document.querySelector('button[data-action="decrement"]',);
console.log(decrementRefBtn);
const incrementRefBtn = document.querySelector('button[data-action="increment"]',);
console.log(incrementRefBtn);
const valueRef = document.querySelector('#value');
console.log(valueRef);

let counterValue = 0;

decrementRefBtn.addEventListener('click',onButtonDecrement);
function onButtonDecrement() { valueRef.textContent = counterValue--; };

incrementRefBtn.addEventListener('click',onButtonIncrement);
function onButtonIncrement() { valueRef.textContent = counterValue++; };





    
