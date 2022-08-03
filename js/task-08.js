const form = document.querySelector("form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
// делаем деструктуризацию для получения только нужных эмейла и пароля0
  const {elements: { email, password } } = event.currentTarget;
// проверка на заполненость формы,если хоть одно поле не заполнено выводим алерт
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    // если поля заполнены ,заполняем обьекту юзер эмейл пароль
    const user = {
          email: email.value,
          password: password.value,
          }
    console.log(`Login: ${user.email}, Password: ${user.password}`);
    event.currentTarget.reset();
}
