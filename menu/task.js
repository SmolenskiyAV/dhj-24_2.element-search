// ### Task 2.2 ###

const submenuLink = document.querySelectorAll('.menu_sub'); // поиск коллекции с пунктами подменю
const menuLink = document.querySelector('.menu_main');   // поиск коллекции пунктов меню
   
   let openedSubMenu;  // переменная, для хранения текущего открытого подменю
   

   function menuOperate(){
     
     openedSubMenu = menuLink.querySelector('.menu_active'); 
      
      if (openedSubMenu !== null) {        // если в меню уже есть откытые подменю
         openedSubMenu.classList.remove('menu_active');   // закрываем открытое подменю
      };
     
      if (openedSubMenu === null) { // если клик по "новому" элементу с закрытым подменю
         this.querySelector('.menu_sub').classList.add('menu_active');   // открываем выпадающее подменю
      };
        
      if ((openedSubMenu !== null) && (this.querySelector('.menu_sub') !== openedSubMenu)) { //если клик по новому элементу, а в предыдущем элементе подменю было открыто
         openedSubMenu.classList.remove('menu_active'); // предыдущее подменю закрываем
         this.querySelector('.menu_sub').classList.add('menu_active');   // подменю в "новом" элементе открываем
      };

      if ((openedSubMenu !== null) && (this.querySelector('.menu_sub') === openedSubMenu)) {
         console.log(this);
         this.querySelector('.menu_sub').classList.remove('menu_active') 
         return; // открываем переход по ссылкам в подменю. Однако..при этом, в момент схлопываяния ранее открытого подменю при клике по его корневому элементу меню, происходит ПЕРЕЗАГРУЗКА ВСЕЙ СТРАНИЦЫ :( Как это устранить?
      }

     return false;   // Запрещаем переход по ссылке для тех пунктов, что имеют вложенное подменю       
   };

   for (let i = 0; i < submenuLink.length; i++) {          
      
      closestElement = submenuLink[i].closest('li'); // внешний элемент списка
      
      closestElement.onclick = menuOperate;  // присвоение через цикл onclick-события элементам меню, содержащим подменю 
   };
/* =======================================
    Перезагрузка страницы исчезает, если return в строке 29 убрать, но тогда перестают работать клики по ссылкам подменю. */ 
   
      




