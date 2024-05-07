function showServices(category) {
    // Получить список услуг
    var servicesList = document.getElementById('services-list');
    
    // Очистить список услуг
    servicesList.innerHTML = '';
    
    // Заполнить список услуг в зависимости от выбранной категории
    if (category === 'Женская стрижка') {
      servicesList.innerHTML = `
        <li>Стрижка женская от 500₽</li>
        <li>Стрижка концов 500₽</li>
        <li>Полировка волос от 1000₽</li>
        <li>Челка 200₽</li>
        <li>Мытье головы 300₽</li>
        <li>Сушка феном 400₽</li>
      `;
    } else if (category === 'Мужская стрижка') {
      servicesList.innerHTML = `
        <li>1 насадка 300₽</li>
        <li>2 насадки 350₽</li>
        <li>Модельная стрижка от 500₽</li>
        <li>Стрижка с мытьем головы от 700₽</li>
      `;
    } else if (category === 'Тонирование') {
      servicesList.innerHTML = `
        <li>Короткие от 1500₽</li>
        <li>По плечи от 2200₽</li>
        <li>По лопатки от 2300₽</li>
        <li>Длинные от 3000₽</li>
      `;
    } else if (category === 'Окрашивание в один тон') {
      servicesList.innerHTML = `
        <li>Короткие от 1800₽</li>
        <li>По плечи от 2000₽</li>
        <li>По лопатки от 2500₽</li>
        <li>Длинные от 3000₽</li>
      `;
    } else if (category === 'Выход из черного') {
      servicesList.innerHTML = `
        <li>Смывка 1 этап от 3000₽</li>
        <li>Смывка 2 этапа от 6000₽</li>
        <li>Химическая завивка от 2000₽</li>
      `;
    } else if (category === 'Уход для волос') {
      servicesList.innerHTML = `
        <li>Ламинирование волос от 2500₽</li>
        <li>Экспресс уход от 1500₽</li>
        <li>Ботокс для волос (1 процедура) от 3500₽</li>
        <li>Биксипластия (1 процедура) от 3500₽</li>
      `;
    }
      else if (category === 'Укладки') {
    servicesList.innerHTML = `
      <li>Легкие локоны от 1300₽</li>
      <li>Укладка на брашинг от 800₽</li>
      <li>Укладка на плойку (щипцы) от 1500₽</li>
      <li>3D локоны от 2000₽</li>
      <li>Локоны косы от 2000₽</li>
    `;
  }
      else if (category === 'Вечерняя прическа любой сложности') {
    servicesList.innerHTML = `
      <li>До плеч от 1500₽</li>
      <li>Ниже плеч от 2000₽</li>
    `;
  }
      else if (category === 'Плетение кос') {
    servicesList.innerHTML = `
      <li>Одна косичка от 500₽</li>
      <li>Французская коса от 800₽</li>
      <li>Афро косы от 4000₽ + материал</li>
      <li>Афро кудри от 4000₽ + материал</li>
    `;
  }
      else if (category === 'Маникюр') {
    servicesList.innerHTML = `
      <li>Маникюр классический + лак 450₽</li>
      <li>Маникюр + гель лак 1200₽</li>
      <li>Коррекция гель 1200₽</li>
          `;
  }
     else if (category === 'Наращивание ногтей') {
    servicesList.innerHTML = `
      <li>Длина 1-3 1500₽</li>
      <li>Длина 3 и выше 2000₽</li>
      <li>Ремонт 1 ногтя 150₽</li>
      <li>Дизайн 100-200₽</li>
      <li>Снятие ногтей другого мастера 300₽</li>
    `;
  }
     else if (category === 'Педикюр') {
    servicesList.innerHTML = `
      <li>Педикюр аппаратный smart+лак 1500₽</li>
      <li>Педикюр + гель лак 1800₽</li>
      <li>Обработка стоп (без ногтей) 1000₽</li>
      <li>Обработка пальчиков + гель лак 1100₽</li>
      <li>Обработка пальчиков (без покрытия) 800₽</li>
      <li>Покрытие гель лак (однотонное) 600₽</li>
      <li>Дизайн 100-200₽</li>
    `;
  }
    else if (category === 'Перманентный макияж') {
    servicesList.innerHTML = `
      <li>Брови (первичная процедура) 5000₽</li>
      <li>Коррекция брови 3000₽</li>
      <li>Губы (первичная процедура) 5000₽</li>
      <li>Коррекция губ 3000₽</li>
      <li>Межресничка 3500₽</li>
      <li>Коррекция межреснички 2000₽</li>
    `;
  }
     else if (category === 'Удаление некачественного татуажа') {
    servicesList.innerHTML = `
      <li>Лазер (одна процедура) 2000₽</li>
      <li>Ремувер (одна процедура) 2000₽</li>
      <li>Удаление тату 1 см от 1000₽</li>
    `;
  }
    else if (category === 'Визаж') {
    servicesList.innerHTML = `
      <li>Дневной макияж 1800₽</li>
      <li>Вечерний макияж 2500₽</li>
      <li>Свабедный макияж 3000₽</li>
      <li>Выезд на дом 500₽</li>
    `;
  }
     else if (category === 'Оформление бровей') {
    servicesList.innerHTML = `
      <li>Оформление и окрашивание бровей от 700₽</li>
      <li>Коррекция бровей 500₽</li>
      <li>Удаление бровей воском 200₽</li>
      <li>Удаление усиков воском 200₽</li>
    `;
  }
    else if (category === 'Наращивание ресниц') {
    servicesList.innerHTML = `
      <li>Классическое наращивание 1800₽</li>
      <li>2D 2000₽</li>
      <li>3D 2200₽</li>
      <li>4D 2400₽</li>
      <li>5D 2600₽</li>
      <li>M,L изгиб 200₽</li>
      <li>Снятие чужой работы 300₽</li>
    `;
  }
    else if (category === 'Пилинги') {
    servicesList.innerHTML = `
      <li>Гидропилинг 1200₽</li>
      <li>Фруктовый 1500₽</li>
      <li>Миндальный 1500₽</li>
      <li>Азелаиновый 1500₽</li>
      <li>Anti-age Holy Land 1500₽</li>
      <li>Джеснера 2500₽</li>
      <li>Карбоновый 1500₽</li>
      <li>Легкий ферментативный + альгинатная маска 1800₽</li>
    `;
  }
   else if (category === 'Массаж лица') {
    servicesList.innerHTML = `
      <li>Ручная пластика лица 1500₽</li>
      <li>Классический массаж лица 1000₽</li>
      <li>Вакуумный массаж лица с RF лифтингом 1200₽</li>
    `;
  }
    else if (category === 'СПА терапия лица') {
    servicesList.innerHTML = `
      <li>30 минут 1000₽</li>
      <li>45 минут 1200₽</li>
      <li>60 минут 1500₽</li>
    `;
  }
    else if (category === 'Косметологические процедуры') {
    servicesList.innerHTML = `
      <li>Чистка лица комбинированная 2000₽</li>
      <li>Вакуумная чистка 1500₽</li>
      <li>Нанонидлинг 1500₽</li>
      <li>Be Glow эффект тонального крема 1500₽</li>
      <li>Фарфоровая куколка 1500₽</li>
      <li>Фонофорез 1 процедура 1200₽</li>
      <li>Фонофорез курс 5 процедур 5000₽</li>
      <li>Криотерапия 1 процедура 1500₽</li>
      <li>Криотерапия курс 5 процедур 5000₽</li>
      <li>Любой уход по типу кожи 1000₽</li>
    `;
  }
    else if (category === 'Лазерная эпиляция') {
    servicesList.innerHTML = `
      <li>Глубокое бикини + ягодицы 1500₽</li>
      <li>Подмышки 700₽</li>
      <li>Ноги полностью 1800₽</li>
      <li>Ноги до колен 1200₽</li>
      <li>Руки до локтей 700₽</li>
      <li>Руки полностью 900₽</li>
      <li>Усики 200₽</li>
      <li>Баки 200₽</li>
      <li>Подбородок 300₽</li>
      <li>Сэт 3000₽</li>
    `;
  }
    else if (category === 'Лазерные процедуры') {
    servicesList.innerHTML = `
      <li>Фотоомоложение 1500₽</li>
      <li>Лазерное лечение акне 1300₽</li>
      <li>Укрепление и осветление сосудистой сетки (купероз) 1200₽</li>
      <li>Осветление и удаление пигментации 1200₽</li>
      <li>Микротоковая терапия лица 1000₽</li>
    `;
  }
    else if (category === 'Коррекция фигуры') {
    servicesList.innerHTML = `
      <li>Микротоковый массаж всего тела 1500₽</li>
      <li>Бразильский силуэт 1200₽</li>
      <li>Вакуумный массаж тела с RF лифтингом 1 зона 800₽</li>
      <li>Вакуумный массаж тела с RF лифтингом тело полностью 7500₽</li>
      <li>Миостимуляция 1 зона 700₽</li>
    `;
  }
    else if (category === 'Обёртывание, холодное и горячее') {
    servicesList.innerHTML = `
      <li>Омолаживающее 1500₽</li>
      <li>Антицеллюлитное 1300₽</li>
      <li>Детокс 1300₽</li>
      <li>Лимфодренажное 1300₽</li>
      <li>Вакуумный массаж тела + обертывание 2500₽</li>
      <li>Миостимуляция + обертывание 2500₽</li>
    `;
  }
    
    // Установить активную кнопку
    var categoryButtons = document.getElementsByClassName('category-btn');
    for (var i = 0; i < categoryButtons.length; i++) {
      categoryButtons[i].classList.remove('active');
    }
    
    var activeButton = document.querySelector('.category-btn[data-category="' + category + '"]');
    activeButton.classList.add('active');
  }
  
  // Получаем ссылки на элементы
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modale');
const closeBtn = modal.querySelector('.close');

// Функция для открытия модального окна
function openModal() {
  modal.style.display = 'block';
  modal.classList.add('animation');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
  modal.classList.remove('animation');
}

// События для открытия и закрытия модального окна
openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});