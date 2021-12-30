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

function changeSideParameters(slideNumber) {  // функция замены активного слайда

    activeSlide.classList.remove('slider__item_active'); // закрытие открытого слайда
        activeDot.classList.remove('slider__dot_active');   // деактивирование точки
        sliderItemsArray[slideNumber].classList.add('slider__item_active'); // открытие следующего слайда
        dotItemsArray[slideNumber].classList.add('slider__dot_active'); // активирование(подсветка) новой точки
        activeSlide = sliderItemsArray[slideNumber];  // новый открытый слайд (следующий)
        activeDot = dotItemsArray[slideNumber];       // новая подсвеченная точка
        activeNumber = slideNumber;
};

function cicleSwitchSlide(event) { // функция циклической смены выбранных слайдов 
    
    elem = event.target;  // получение элемента, по которому осуществлён клик
    
    if (elem.classList.contains('slider__arrow_prev')) { // условие клика на стрелку "влево"
        
        if (activeNumber === 0) currentNumber = sliderItemsArray.length - 1 // зацикливание просмотра при достижении начала списка элементов коллекции слайдов
        else currentNumber = activeNumber - 1;

        changeSideParameters(currentNumber);
    };

    if (elem.classList.contains('slider__arrow_next')) { // // условие клика на стрелку "вправо"
        
        if (activeNumber === sliderItemsArray.length - 1) currentNumber = 0  // зацикливание просмотра при достижении конца списка элементов коллекции слайдов
        else currentNumber = activeNumber + 1;

        changeSideParameters(currentNumber);
    };

};

document.addEventListener('click', cicleSwitchSlide)  // обработка события клика на один из элементов управления слайдами (стрелку)


for (let m =0; m < dotItemsArray.length; m++) { //цикл для обработки кликов по точкам

    dotItemsArray[m].onclick = function (){ // обработка клика на любом элементе коллекции точек "slider__dot"
       if ((dotItemsArray[m]) && (m <= (dotsArrayLength - 1))) {        
        changeSideParameters(m);
       }
    };
 };

