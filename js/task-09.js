function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');
const divRef = document.querySelector('.widget');
const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');
console.log(bodyRef)

buttonRef.addEventListener('click', onChangeColorButton);

function onChangeColorButton() {
bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor
  }
