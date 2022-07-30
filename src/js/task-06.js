// найти инпут id="validation-input"
// найти data-length="6"
// добавить слушателя событий
// с помощью ифа проверить есть ли правильное количество символов data-length="6"
// если столько правильное количество цвет зелный valid
// неправильное красный invalid

const inputRef = document.querySelector('input');
const inputValidLength = document.querySelector('[data-length="6"]');
const startBorderColor = document.querySelector('#validation-input');
console.log(startBorderColor)
const validColor = document.querySelector('#validation-input[valid]');
const invalidColor = document.querySelector('#validation-input[invalid]');

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputRef.classList.add('valid')
       
    }
    inputRef.classList.remove('invalid')
    
}