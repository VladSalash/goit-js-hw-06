// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output')

// ура я решил, долгий был консилиум))

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', (eventInput) => {
    if (eventInput.currentTarget.value === "") {
      return  refs.output.textContent = 'Anonymous'; 
    }
  refs.output.textContent = eventInput.currentTarget.value
})
refs.input.addEventListener('blur', () => {
  refs.input.value = '';
  refs.output.textContent = 'Anonymous'; 
})
