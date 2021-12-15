// ### Task 2.1 ###

const modalMain = document.getElementById("modal_main"); // поиск элемента "окно #modal_main"
const modalSuccess = document.getElementById("modal_success"); // поиск элемента "окно #modal_success"

modalMain.classList.add("modal_active");  // отображене окна #modal_main в момент загрузки страницы
//modalSuccess.classList.add("modal_active");

let modalActive = document.querySelector('.modal_active'); // поиск элемента активного(открытого) окна 

function operateModal(event) { // функция операций с активным модальным окном
    
    elem = event.target;  // получение элемента, по которому осуществлён клик
    
    if (elem.classList.contains("modal__close_times")) { // условие клика на крестик в модальном окне
        modalMain.classList.remove("modal_active"); // закрытие модального окна #modal_main (если оно открыто)
        modalSuccess.classList.remove("modal_active"); // закрытие модального окна #modal_success (если оно открыто)
    };

    if (elem.classList.contains("show-success")) { // условие клика на элемент "Сделать хорошо"(show-success)
        modalMain.classList.remove("modal_active"); // закрытие модального окна #modal_main
        modalSuccess.classList.add("modal_active");  // открытие модального окна #modal_success
        modalActive = document.querySelector('.modal_active'); // новый поиск элемента активного(открытого) окна 
    };
        
    console.log(modalActive);
    console.log(elem);
        
};


console.log(modalActive);

modalActive.addEventListener('click', operateModal)  // обработка события клика на один из элементов внутри активного(открытого) модального окна

/* КОД НЕ РАБОТАЕТ КАК НАДО! 
После первоначальной обработки события клика на открытом модальном окне,
однократно срабатывает либо закрытие этого открытого окна (if в строке 15), либо нажатие кнопки
"Сделать хорошо" (if в строке 20). После этого обработка события (стр.34) уже не вызывается и второе открытое модальное окно
закрыть не получается (стр.17) - что было бы возможным, если бы обработчик сработал повторно.
ПОЧЕМУ ТАК ПОЛУЧАЕТСЯ???  :(  */