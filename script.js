

/*
1. Выбрать поле для игры - done
2. Заполнить игровое поле карточками(тегами li) - done
3. Сделать клик по карточкам - done
4. Сделать переворачивание карточек - done
   4.1 Размешаем картинки для каждой карточки - done
   4.2 Показываем картинку - done
5. Если выбрано 2 картинки проверяем на совпадение - done
   5.1 Если картинки совпадают то удаляем карточки - done
   5.2 Перевернуть все выбраные карточки - done
6. Если все карточки удалены вывести окно с перезапуском игры - done
7. При клике на кноку перезагрузить обновляем страничку - done
*/

// Выбераем поле игры по селектору
var cardsField = document.querySelector('#cards');
var resetBlock = document.querySelector('#reset');
var resetBtn = document.querySelector('#reset-btn');

// В переменной coundCards храниться значение 16 (по умолчанию 16 карточек)
var coundCards = 16;
// Масив с картинками
var images = [
    1,2,3,4,
    5,6,7,8,
    1,2,3,4,
    5,6,7,8
];
// В переменной deletedCards по умолчанию значение 0
var deletedCards = 0;
// В переменной selected храниться пустой масив
var selected = [];
// В переменной selected по умолчанию значение false
var pause = false;
// Цыкл создания карточер:
	// В переменной i храниться значение 0 
	 // Если i меньше coundCards тогда добавляем 16 карточек в поле игры
for (var i = 0; i < coundCards; i++) {
	// Создаем карточки
	var li = document.createElement('li');
	    li.id = i;
	    // Добавляем карточки в игровое поле
	    cardsField.appendChild(li);
} 
// Функция клика по карточке
 // event внутрений элемент который выберает все в пле cardsField
cardsField.onclick = function(event) {
	if(pause == false) {
		// Помешяем в переменную element блок li
	var element = event.target;
	// Проверка если мы кликаем по элементу li тогда фон li меняеться
	if(element.tagName == "LI" && element.className != 'active') {
		// Вставить елемент в конец
		selected.push(element);
		// К нашей карточки добавляем класс active
		element.className = 'active';
		// В переменной img выбераем масив с картинками и добавляем к каждому елементу id
		var img = images[element.id];
		// Меняем фон карточки на картинку
	    element.style.backgroundImage = "url(images/" + img + ".png)";
	    // Условие если selected выбрано 2 карточки тогда:
	    if(selected.length == 2) {
	    	// У паузы значение true
	    	pause = true;
	    	// Условие если у масива с картинками 0 значение равняеться 1
	    	if(images[selected[0].id] == images[selected[1].id]) {
	    		// Удаляем первую карточку
	    	   	selected[0].style.visibility = "hidden";
	    		// Удаляем первую карточку
	    	   	selected[1].style.visibility = "hidden";
	    	   	// В deletedCards записываем новое значение 2
	    	   	deletedCards = deletedCards + 2;
	    	}
	    	// Функия refreshCards сработает через 600 милисикунд
	    	setTimeout(refreshCards, 600);
	    }
	}
	// console.dir(selected);
	}
}
// Функция refreshCards (удаление карточек)
function refreshCards() {
	// Цыкл for 
	for (var i = 1; i < coundCards; i++) {
		// Убераем класс active у карточек
		cardsField.children[i].className = "";
		// Отображаем стандартную картинку карточки
		cardsField.children[i].style.backgroundImage = "url(images/back.png)";
	}
	// Если удаление карточек равняется количеству карточек тогда:
	if(deletedCards == coundCards) {
		// Отображаем блок перезагруски страницы
		resetBlock.style.display = "block";
	}
	// Очещаем масив
	selected = [];
	// Убераем паузу
	pause = false;
}
// Функция клика по кнопке рестарт
resetBtn.onclick = function() {
	// Перезагружаем страницу
	location.reload();
}