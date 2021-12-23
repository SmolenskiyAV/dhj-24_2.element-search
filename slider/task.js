// ### Task 2.3 ###

const sliderItems = document.querySelectorAll('.slider__item'); // коллекция всех элементов слайдеров "slider__item"
const sliderItemsArray = [...sliderItems];                   // преобразовываем коллецию слайдеров "slider__item" в массив объектов

const arrowPrev = document.querySelector('.slider__arrow_prev'); // поиск элемента "стрелка влево"
const arrowNext = document.querySelector('.slider__arrow_next'); // поиск элемента "стрелка вправо"

// подсчитываем коллекцию элементов точек отдельно на тот случ, если количество точек в разметке не совпадает с количеством слайдов
const dotItems = document.querySelectorAll('.slider__dot'); // коллекция всех элементов точек "slider__dot"
const dotItemsArray = [...dotItems];                   // преобразовываем коллецию точек "slider__dot" в массив объектов
const dotsArrayLength = sliderItemsArray.length;



let activeSlide = document.querySelector('.slider__item_active');  // поиск активного(открытого) слайда на момент первоначальной загрузки страницы
let activeNumber; // переменная номера активного слайда
let currentNumber;


for (let i = 0; i < sliderItemsArray.length; i++) {  // перебор коллекции слайдов
    if (sliderItemsArray[i].classList.contains( 'slider__item_active')) { // условие поиска номера в коллекцци, принадлежащее первоначально открытому слайду
        activeNumber = i;  // определение номера активного слайда
        console.log(activeNumber);
    };
};

if (activeNumber < dotsArrayLength) dotItemsArray[activeNumber].classList.add('slider__dot_active'); //подсветка точки при первоначальной загрузке страницы
let activeDot = document.querySelector('.slider__dot_active');  // поиск активной точки на момент первоначальной загрузки страницы

function switchSlide(event) { // функция смены слайдов 
    
    elem = event.target;  // получение элемента, по которому осуществлён клик
    
    if (elem.classList.contains('slider__arrow_prev')) { // условие клика на стрелку "влево"
        
        if (activeNumber === 0) currentNumber = sliderItemsArray.length - 1 // зацикливание просмотра при достижении начала списка элементов коллекции слайдов
        else currentNumber = activeNumber - 1;

        activeSlide.classList.remove('slider__item_active'); // закрытие открытого слайда
        activeDot.classList.remove('slider__dot_active');   // деактивирование точки
        sliderItemsArray[currentNumber].classList.add('slider__item_active'); // открытие следующего слайда
        dotItemsArray[currentNumber].classList.add('slider__dot_active'); // активирование(подсветка) новой точки
        activeSlide = sliderItemsArray[currentNumber];  // новый открытый слайд (следующий)
        activeDot = dotItemsArray[currentNumber];       // новая подсвеченная точка
        activeNumber = currentNumber;
    };

    if (elem.classList.contains('slider__arrow_next')) { // // условие клика на стрелку "вправо"
        
        if (activeNumber === sliderItemsArray.length - 1) currentNumber = 0  // зацикливание просмотра при достижении конца списка элементов коллекции слайдов
        else currentNumber = activeNumber + 1;

        activeSlide.classList.remove('slider__item_active'); // закрытие открытого слайда
        activeDot.classList.remove('slider__dot_active');   // деактивирование точки
        sliderItemsArray[currentNumber].classList.add('slider__item_active'); // открытие предыдующего слайда
        dotItemsArray[currentNumber].classList.add('slider__dot_active'); // активирование(подсветка) новой точки
        activeSlide = sliderItemsArray[currentNumber];  // новый открытый слайд (предыдущий)
        activeDot = dotItemsArray[currentNumber];       // новая подсвеченная точка
        activeNumber = currentNumber;
    };

};

document.addEventListener('click', switchSlide)  // обработка события клика на один из элементов управления слайдами


for (m =0; m < dotItemsArray.length; m++) { //цикл для обработки кликов по точкам

    (function(m) {                          // функция смены слайдов в цикле по кликам на точках
       dotItemsArray[m].onclick = function (){ // обработка клика на любом элементе коллекции точек "slider__dot"
       if ((dotItemsArray[m]) && (m <= (dotsArrayLength - 1))) {        
        activeSlide.classList.remove('slider__item_active'); // закрытие открытого слайда
        activeDot.classList.remove('slider__dot_active');   // деактивирование точки
        sliderItemsArray[m].classList.add('slider__item_active'); // открытие слайда, соответсвующего данному элементу точки
        dotItemsArray[m].classList.add('slider__dot_active'); // активирование(подсветка) новой точки
        activeSlide = sliderItemsArray[m];  // новый открытый слайд
        activeDot = dotItemsArray[m];       // новая подсвеченная точка
       }
       };
    }(m));
 }
