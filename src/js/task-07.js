// найти инпут,мин,мах, бр, спан,
// добавить событие импут
// написать функцию

//написать ,чтобы при перетаскивании ползунка
// (изменение значения input#font - size - control) менялся текст:
// больше - больше, меньше - меньше.
// разобраться как это сделать,понять как все элементы работают, и как это связать все воедино теории с if,if.else
// Разобрался.Элементы которые я наше мин,мах,бр не нужны.Думал как сделать так, чтобы когда ползунок переместили применилось нужное значение и текст увеличелся.
// изучил свойство fjntSize,как его использовать это же сss,для этого есть свойство style.Немножко не понял при чем тут px.
// вообщем вывод:
// если не понимаешь как это сделать -
//    1) разобраться, что от меня хотят,
//     2)как можно это сделать,
//     3)как по идее это должно работать,
//     4)что можно использовать из технологий,
//     5)что ты изучил и знаешь,
// --------------обязательно пересмотреть конспект :
// --------------может есть пример и технология и так легчче и быстрее прийдет решение
        
//     если нечего не выходит то гуглить. 
//      Не просто гуглить, а :
//     1)разобраться, что происходит,
//     2)понимаю ли я все, что там написано -
//     если, что - то не допонимаю то вперед разбираться!!!
//         напоминать себе какуюто технологию или мелочь чтобы четко понимать что происходит в коде.
        
//         без этого то, что ты загуглил и нашел решение все бесполезно!!!  

const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const textRef = document.querySelector('#text');
console.log(textRef);

inputRef.addEventListener('input', onInputRange)

function onInputRange() {
    textRef.style.fontSize = `${inputRef.value}px`
    
}
