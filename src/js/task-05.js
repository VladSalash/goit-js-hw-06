const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
    }

refs.input.addEventListener('input',onInputEvent)
  function onInputEvent(eventInput){
    if (eventInput.currentTarget.value === "") {
      return  refs.output.textContent = 'Anonymous'; 
    }
  refs.output.textContent = eventInput.currentTarget.value
  }


refs.input.addEventListener('blur',onBlurEvent)
  function onBlurEvent(){
  refs.input.value = '';
  refs.output.textContent = 'Anonymous'; 
  }
