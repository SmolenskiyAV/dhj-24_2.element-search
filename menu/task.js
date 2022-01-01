// ### Task 2.2 ###

const submenuLink = document.querySelectorAll('.menu_sub'); // поиск коллекции с пунктами подменю
const menuLink = document.querySelector('.menu_main');   // поиск коллекции пунктов меню
   
   let openedSubMenu;  // переменная, для хранения текущего открытого подменю
   

   function menuOperate(){
     
      let elem = this.closest('li'); // элемент текущего выбранного главного меню li.menu_item, содержащий все внутренние ссылки(подменю)

     openedSubMenu = menuLink.querySelector('.menu_active'); 
      
      if (openedSubMenu !== null) {        // если в меню уже есть откытые подменю
         openedSubMenu.classList.remove('menu_active');   // закрываем открытое подменю
      };
     
      if (openedSubMenu === null) { // если клик по "новому" элементу с закрытым подменю
         elem.querySelector('.menu_sub').classList.add('menu_active');   // открываем выпадающее подменю
      };
        
      if ((openedSubMenu !== null) && (elem.querySelector('.menu_sub') !== openedSubMenu)) { //если клик по новому элементу, а в предыдущем элементе подменю было открыто
         openedSubMenu.classList.remove('menu_active'); // предыдущее подменю закрываем
         elem.querySelector('.menu_sub').classList.add('menu_active');   // подменю в "новом" элементе открываем
      };

     return false;   // Запрещаем переход по ссылке для тех пунктов, что имеют вложенное подменю       
   };

   for (let i = 0; i < submenuLink.length; i++) {          
      
      let closestElement = submenuLink[i].closest('li').querySelector('a.menu__link'); // элемент-ссылка a.href внутри элемента главного меню .menu__item, содержащего подменю ul.menu_sub
      
      closestElement.onclick = menuOperate;  // присвоение через цикл onclick-события элементам главного меню, содержащим ссылку a.href
   };

      




