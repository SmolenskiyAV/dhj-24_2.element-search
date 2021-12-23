// ### Task 2.2 ###

const menuLink = document.getElementsByClassName("menu__link"); // поиск коллекции с пунктами меню
//const menuLinkArray = [...menuLink];                            // преобразовываем коллецию menuLink в массив объектов

   let openedSubMenu;    // переменная, для хранения текущего открытого подменю

   for (i = 0; i < menuLink.length; i++) {   // присвоение onclick-события элементам menuLink через цикл       
    
      (function(n) {
       menuLink[n].onclick = function (){

         if (openedSubMenu != null) {        // если в меню уже есть откытые подменю
         openedSubMenu.classList.remove('menu_active');   // закрываем открытое подменю
         openedSubMenu = null;   // откытых подменю больше нет
         };
        
         if (menuLink[n].closest('li') != null) {  // если элемент, на котором зафиксирован клик, вложен в элемент списка <li>

            const selectedPunkt = menuLink[n].closest('li'); // выбранный элемент <li>
            
            if (selectedPunkt.querySelector('ul.menu_sub')) { // если перебираемый(вложенный) элемент списка содержит элемент с классом "menu_sub"
               selectedPunkt.querySelector('ul.menu_sub').classList.add('menu_active');   // открываем выпадающее меню
               openedSubMenu = selectedPunkt.querySelector('ul.menu_sub');
               return false;                                  // Запрещаем переход по ссылке для тех пунктов, что имеют вложенное подменю
            };
            
         }; 
      };
      }(i));
   }

   const d = document.querySelectorAll('div', 'p', 'span'); // формирование коллекции элементов, находящихся на странице, но не содержащей элемента меню <ul>. Предполагается перечеслине всех этих элементов в качестве параметров querySelectorAll. Как без цикла одной строкой вывести всю коллекцию страницы, но без элементов меню <ul> по-другому??? Может есть фильтр для этого метода, в котором можно указать: "выводить всё, кроме <ul>"???
 
   console.log(d);

   for (m =0; m < d.length; m++) {

      (function(m) {
         d[m].onclick = function (){ // обработка клика на любом элементе страницы, кроме меню (чтобы сворачивать уже раскрытое подменю, если клик происходит за пределами меню)
         if ((openedSubMenu != null)) {        // если в меню уже есть откытые подменю, и клик происходит за пределами меню
            openedSubMenu.classList.remove('menu_active');   // закрываем открытое подменю
            openedSubMenu = null;   // откытых подменю больше нет
         }
         };
      }(m));
   }




