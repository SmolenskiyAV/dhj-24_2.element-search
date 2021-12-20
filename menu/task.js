// ### Task 2.2 ###

const menuLink = document.getElementsByClassName("menu__link"); // поиск коллекции с пунктами меню
//const menuLinkArray = [...menuLink];                            // преобразовываем коллецию menuLink в массив объектов

//const menuMain = document.querySelector("ul.menu_main");

console.log(menuLink);

    
   for (i = 0; i < menuLink.length; i++) {   // присвоение onclick-события элементам menuLink через цикл   (так это можно назвать???)           
    
      (function(n) {
       menuLink[n].onclick = function (){
        
        if (menuLink[n].closest('li') != null) {  // если элемент, на котором зафиксирован клик, вложен в элемент списка <li>

            const selectedPunkts = [...menuLink[n].closest('li').childNodes]; // формируем массив из всех дочерних(вложенных) элементов текущего элемента <li>
            
            for (let m = 0; m < selectedPunkts.length; m++) { // перебираем элементы текущего списка (на котором зафиксирован клик)
               
               if (selectedPunkts[m].classList.contains("menu_sub")) { // если перебираемый(вложенный) элемент списка содержит класс "menu_sub"
                alert(selectedPunkts[m]);       // попытка(тест!) вывести в сообщение название (текст) элемента, который содержит вложенный элемент с классом menu_sub
               }
            
            }; 
         
         };

      };
      }(i));
   }


