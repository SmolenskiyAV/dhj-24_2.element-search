// ### Task 2.2 ###

const submenuLink = document.querySelectorAll('.menu_sub'); // поиск коллекции с пунктами подменю

   let openedSubMenu;    // переменная, для хранения текущего открытого подменю

   function menuOperate(){
      
      if (openedSubMenu != null) {        // если в меню уже есть откытые подменю
      openedSubMenu.classList.remove('menu_active');   // закрываем открытое подменю
      openedSubMenu = null;   // откытых подменю больше нет
      }
     
      this.querySelector('.menu_sub').classList.add('menu_active');   // открываем выпадающее подменю
      openedSubMenu = this.querySelector('.menu_sub');                // фиксируем факт наличия открытого подменю
                 
      return false;                                  // Запрещаем переход по ссылке для тех пунктов, что имеют вложенное подменю
   };

   for (let i = 0; i < submenuLink.length; i++) {          
    
      submenuLink[i].closest('li').onclick = menuOperate;  // присвоение через цикл onclick-события элементам меню, содержащим подменю 
      
   };


   const notMunuElement = document.querySelectorAll('div', 'p', 'span'); // формирование коллекции элементов, находящихся на странице, но не содержащей элемента меню <ul>. Предполагается перечеслине всех этих элементов в качестве параметров querySelectorAll. Как без цикла одной строкой вывести всю коллекцию страницы, но без элементов меню <ul> по-другому??? Может есть фильтр для этого метода, в котором можно указать: "выводить всё, кроме <ul>"???
 
   
   for (m =0; m < notMunuElement.length; m++) {

      notMunuElement[m].onclick = function (){ // обработка клика на любом элементе страницы, кроме меню (чтобы сворачивать уже раскрытое подменю, если клик происходит за пределами меню)
      
      if ((openedSubMenu != null)) {        // если в меню уже есть откытые подменю, и клик происходит за пределами меню
            openedSubMenu.classList.remove('menu_active');   // закрываем открытое подменю
            openedSubMenu = null;   // откытых подменю больше нет
         };
      };
   };
      




