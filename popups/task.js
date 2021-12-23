// ### Task 2.1 ###

const modalMain = document.getElementById("modal_main"); // поиск элемента "окно #modal_main"
const modalSuccess = document.getElementById("modal_success"); // поиск элемента "окно #modal_success"

modalMain.classList.add("modal_active");  // отображене окна #modal_main в момент загрузки страницы


function operateModal(event) { // функция операций с активным модальным окном
    
    elem = event.target;  // получение элемента, по которому осуществлён клик
    
    if (elem.classList.contains("modal__close_times")) { // условие клика на крестик в модальном окне
        modalMain.classList.remove("modal_active"); // закрытие модального окна #modal_main (если оно открыто)
        modalSuccess.classList.remove("modal_active"); // закрытие модального окна #modal_success (если оно открыто)
    };

    if (elem.classList.contains("show-success")) { // условие клика на элемент "Сделать хорошо"(show-success)
        modalMain.classList.remove("modal_active"); // закрытие модального окна #modal_main
        modalSuccess.classList.add("modal_active");  // открытие модального окна #modal_success
    };
               
};


document.addEventListener('click', operateModal)  // обработка события клика на один из элементов всей страницы (документа)

