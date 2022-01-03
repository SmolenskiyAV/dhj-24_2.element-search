// ### Task 2.3 ###

const sliderItems = document.querySelectorAll('.slider__item'); // коллекция всех элементов слайдеров "slider__item"
const sliderItemsArray = [...sliderItems];                   // преобразовываем коллецию слайдеров "slider__item" в массив объектов

const arrowPrev = document.querySelector('.slider__arrow_prev'); // поиск элемента "стрелка влево"
const arrowNext = document.querySelector('.slider__arrow_next'); // поиск элемента "стрелка вправо"

const dotItems = document.querySelectorAll('.slider__dot'); // коллекция всех элементов точек "slider__dot"
const dotItemsArray = [...dotItems];                   // преобразовываем коллецию точек "slider__dot" в массив объектов
const dotsArrayLength = sliderItemsArray.length;

if (dotsArrayLength <= sliderItemsArray.length) {  //если количество точек меньше либо равно общему количеству слайдов
    dotItemsArray[
        sliderItemsArray.findIndex(item => item.classList.contains( 'slider__item_active')) //номер в коллекцци, принадлежащий открытому слайду на момент первоначальной загрузки страницы
        ].classList.add('slider__dot_active');         // активировать подсветку точки, при первоначальной загрузке
};


function changeSideParameters(slideNumber, slideItem, dotItem) {  // функция замены активного слайда

    slideItem.classList.remove('slider__item_active'); // закрытие открытого слайда
    dotItem.classList.remove('slider__dot_active');   // деактивирование точки
    sliderItemsArray[slideNumber].classList.add('slider__item_active'); // открытие следующего слайда
    dotItemsArray[slideNumber].classList.add('slider__dot_active'); // активирование(подсветка) новой точки
        
};


function cicleSwitchSlide(event) { // функция циклической смены выбранных слайдов 
    
    elem = event.target;  // получение элемента, по которому осуществлён клик

    let activeNumber = sliderItemsArray.findIndex(item => item.classList.contains( 'slider__item_active')); //поиска номера в коллекцци, принадлежащий открытому слайду
    if (activeNumber === -1) {
        activeNumber = 0;
        console.log ('активный слайд не найден. Его номер установлен по умолчанию = 0.');
    } else console.log('номер активного слайда = ' + activeNumber);

    let activeSlide = sliderItemsArray[activeNumber];               //активный(открытый) слайд
    let activeDot = dotItemsArray[activeNumber];                    // активная(подсвечиваемая) точка

    if (elem.classList.contains('slider__arrow_prev')) { // условие клика на стрелку "влево"
        
        if (activeNumber === 0) currentNumber = sliderItemsArray.length - 1 // зацикливание просмотра при достижении начала списка элементов коллекции слайдов
        else currentNumber = activeNumber - 1;

        changeSideParameters(currentNumber, activeSlide, activeDot);
    };

    if (elem.classList.contains('slider__arrow_next')) {    // условие клика на стрелку "вправо"
        
        if (activeNumber === sliderItemsArray.length - 1) currentNumber = 0  // зацикливание просмотра при достижении конца списка элементов коллекции слайдов
        else currentNumber = activeNumber + 1;

        changeSideParameters(currentNumber, activeSlide, activeDot);
    };

};


document.addEventListener('click', cicleSwitchSlide)  // обработка события клика на один из элементов управления слайдами (стрелку)


for (let m =0; m < dotItemsArray.length; m++) { //цикл для обработки кликов по точкам

    dotItemsArray[m].onclick = function (){ // обработка клика на любом элементе коллекции точек "slider__dot"

        let activeNumber = sliderItemsArray.findIndex(item => item.classList.contains( 'slider__item_active')); //поиска номера в коллекцци, принадлежащий открытому слайду

       if ((dotItemsArray[m]) && (m <= (dotsArrayLength - 1))) {        
        changeSideParameters(m, sliderItemsArray[activeNumber], dotItemsArray[activeNumber]);
       };
    };
 };

 // ###### замечание преподавателя #######
 /*
 ... можно было не передавать элементы активного слайда/точки 
 в функцию changeSideParameters для деактивации....Вы могли находить и 
 деактивировать слайд с точкой в самой функции, а так получается, дополнительный 
 лишний параметр (от которого можно было бы отказаться). В остальном, 
 всё реализовано корректно.
 */

