// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// 1)Создай функцию createBoxes(amount), которая принимает один параметр - число. 
//   1. Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// 1)Размеры самого первого <div> - 30px на 30px.
//   1. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

// 1)Все элементы должены иметь случайный цвет фона в формате HEX.
//   1.Используй готовую функцию getRandomHexColor для получения цвета.

// 1)Создай функцию destroyBoxes(),которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

// нужно две функции создать и очистить.
// при вводе количества элементов в поле инпута кликая по кнопке создалась коллекция.
// при клике на кнопку Очистить поле инпута очищаеться с помощью  (reset).

// функция которая создает элементы принимает параметр - число(Number):
// функция 
// 1)задание похоже частично на 6й таск(или все таки на 8й...),только вместо проверки на правильное количество элементов ---просто ввод элементов,затем клик по кнопке создать.
// 2)создание функции createBoxes(amount) похоже на 2й и 3й таск только определитьс я,как буду делать,но там однозначно forEach() по идее.
// У цю змінну записується об'єкт події (event). 
// Вам при кліку на кнопку створення слід зчитувати введену в інпут цифру.
// І да і створити цикл фор, який має пройти кількість ітерацій, що відповідає введеній цифрі.
// На кожній ітерації  - створювати дів

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divControls: document.querySelector('#controls'), 
  input: document.querySelector('#controls > input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}


refs.buttonCreate.addEventListener('click', onCreateRead)

function onCreateRead() {
createBoxes(refs.input.value);
}

function createBoxes(amount) {
  let str = ''; 
  for(let i = 0; i < amount; i++){
    str += createBox(i)
  }
  refs.divBoxes.innerHTML = str;
}
  
function createBox(evbox) {
  return `<div 
          style="background-color: ${getRandomHexColor()};
          height:${30 + 10 * evbox}px;width:${30 + 10 * evbox}px;" >
          </div>`;
}
 


refs.buttonDestroy.addEventListener('click',destroyBoxes)
function destroyBoxes() { 
  refs.divBoxes.innerHTML = '';
  refs.input.value = '';
}