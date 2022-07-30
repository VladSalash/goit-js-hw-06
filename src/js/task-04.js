

const decrementRefBtn = document.querySelector('button[data-action="decrement"]',);
console.log(decrementRefBtn);
const incrementRefBtn = document.querySelector('button[data-action="increment"]',);
console.log(incrementRefBtn);
const valueRef = document.querySelector('#value');
console.log(valueRef);

let counterValue = 0;

// так решил я)

decrementRefBtn.addEventListener('click', () => {
    // valueRef = counterValue--;
    //  (интересную ошибку показівает в консоль ;D )
    valueRef.textContent = counterValue --;
});

incrementRefBtn.addEventListener('click', () => {
    // valueRef = counterValue++;
    // (интересную ошибку показівает в консоль ;D )
    valueRef.textContent = counterValue ++;
});

// такое решение нашел с курсов

// decrementRefBtn.addEventListener('click', onButtonDecrement);
// function onButtonDecrement() {
// valueRef.textContent = counterValue -=1;
//     }

// incrementRefBtn.addEventListener('click', onButtonIncrement);
// function onButtonIncrement() {
// valueRef.textContent = counterValue += 1;
//     }



    
