// ### Task 2.2 ###

const menuLink = document.getElementsByClassName("menu__link"); // поиск коллекции с пунктами меню
//const menuLinkArray = [...menuLink];                            // преобразовываем коллецию menuLink в массив объектов

//const menuMain = document.querySelector("ul.menu_main");

console.log(menuLink);

    
    for (i = 0; i < menuLink.length; i++) {   // присвоение onclick-события элементам menuLink через цикл   (так это можно назвать???)           
    
       (function(n) {
       menuLink[n].onclick = function (){
        
        if (menuLink[n].innerHTML == 'О компании') { //тест срабатывания обработчика при клике на элементе меню "О компании" 
           alert(menuLink[n].innerHTML);
        };

        if (menuLink[n].innerHTML == 'Услуги') {  //тест срабатывания обработчика при клике на элементе меню "Услуги"
            alert(menuLink[n].innerHTML);
         };
        
        if (menuLink[n].contains("menu_sub")) {  //ДАННОЕ УСЛОВИЕ ПОЧЕМУ-ТО НЕ СРАБАТЫВАЕТ! ?? даже если аргумент поменять на ".menu_sub" или "ul.menu_sub".. и при этом убрать два предыдущих условия if. Почему??? :(
            alert(menuLink[n].innerHTML);       // попытка вывести в сообщение название (текст) элемента, который содержит вложенный элемент с классом menu_sub
        };

       };
    }(i));
    }


