let serviceModal = new bootstrap.Modal(document.getElementById('service-modal'));
function showServices(category) {
  
  serviceModal.show();
  
    // Получить список услуг
    var servicesList = document.getElementById('services-list');
    var modal_title = document.getElementById('modal-title');
    // Очистить список услуг
    servicesList.innerHTML = '';
    modal_title.innerHTML = '';
    modal_title.innerHTML = category;
    // Заполнить список услуг в зависимости от выбранной категории
    if (category === 'Парикмахерские услуги') {
      
      servicesList.innerHTML = `
        <li><h4>Женская стрижка:</h4></li>
        <li>Стрижка женская от 500₽</li>
        <li>Стрижка концов 500₽</li>
        <li>Полировка волос от 1000₽</li>
        <li>Челка 200₽</li>
        <li>Мытье головы 300₽</li>
        <li>Сушка феном 400₽</li>
        <li>___________________________________</li>
        <li><h4>Мужская стрижка:</h4></li>
        <li>1 насадка 300₽</li>
        <li>2 насадки 350₽</li>
        <li>Модельная стрижка от 500₽</li>
        <li>Стрижка с мытьем головы от 700₽</li>
        <li><h4>Тонирование:</h4></li>
        <li>Короткие от 1500₽</li>
        <li>По плечи от 2200₽</li>
        <li>По лопатки от 2300₽</li>
        <li>Длинные от 3000₽</li>
        <li>___________________________________</li>
        <li><h4>Окрашивание в один тон:</h4></li>
        <li>Короткие от 1800₽</li>
        <li>По плечи от 2000₽</li>
        <li>По лопатки от 2500₽</li>
        <li>Длинные от 3000₽</li>
        <li>___________________________________</li>
        <li><h4>Выход из черного:</h4></li>
        <li>Смывка 1 этап от 3000₽</li>
        <li>Смывка 2 этапа от 6000₽</li>
        <li>Химическая завивка от 2000₽</li>
        <li>___________________________________</li>
        <li><h4>Уход для волос:</h4></li>
        <li>Ламинирование волос от 2500₽</li>
        <li>Экспресс уход от 1500₽</li>
        <li>Ботокс для волос (1 процедура) от 3500₽</li>
        <li>Биксипластия (1 процедура) от 3500₽</li>
        <li>___________________________________</li>
        <li><h4>Укладки:</h4></li>
        <li>Легкие локоны от 1300₽</li>
        <li>Укладка на брашинг от 800₽</li>
        <li>Укладка на плойку (щипцы) от 1500₽</li>
        <li>3D локоны от 2000₽</li>
        <li>Локоны косы от 2000₽</li>
        <li>___________________________________</li>
        <li><h4>Вечерняя прическа:</h4></li>
        <li>До плеч от 1500₽</li>
        <li>Ниже плеч от 2000₽</li>
        <li>___________________________________</li>
        <li><h4>Плетение кос:</h4></li>
        <li>Одна косичка от 500₽</li>
        <li>Французская коса от 800₽</li>
        <li>Афро косы от 4000₽ + материал</li>
        <li>Афро кудри от 4000₽ + материал</li>
      `;
    } 
      else if (category === 'Ногтевой сервис') {
    servicesList.innerHTML = `
      <li><h4>Маникюр:</h4></li>
      <li>Маникюр классический + лак 450₽</li>
      <li>Маникюр + гель лак 1200₽</li>
      <li>Коррекция гель 1200₽</li>
      <li>___________________________________</li>
      <li><h4>Наращивание ногтей:</h4></li>
      <li>Длина 1-3 1500₽</li>
      <li>Длина 3 и выше 2000₽</li>
      <li>Ремонт 1 ногтя 150₽</li>
      <li>Дизайн 100-200₽</li>
      <li>Снятие ногтей другого мастера 300₽</li>
      <li>___________________________________</li>
      <li><h4>Педикюр:</h4></li>
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
  
  const categorySelect = document.getElementById('category');


  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    const serviceSelect = document.getElementById('service');
    const options = serviceSelect.querySelectorAll('option');
    const services = [ 
      { value: 'Мужская стрижка', text: 'Мужская стрижка', category: 'Стрижки и окрашивания' },
      { value: 'Женская стрижка', text: 'Женская стрижка', category: 'Стрижки и окрашивания' },
      { value: 'Тонирование', text: 'Тонирование', category: 'Стрижки и окрашивания' },
      { value: 'Окрашивание в один тон', text: 'Окрашивание в один тон', category: 'Стрижки и окрашивания' },
      { value: 'Выход из черного', text: 'Выход из черного', category: 'Стрижки и окрашивания' },
      { value: 'Вечерняя прическа любой сложности', text: 'Вечерняя прическа любой сложности', category: 'Стрижки и окрашивания' },
      { value: 'Ламинирование волос', text: 'Ламинирование волос', category: 'Уход волос' },
      { value: 'Экспресс уход для волос', text: 'Экспресс уход для волос', category: 'Уход волос' },
      { value: 'Ботокс для волос', text: 'Ботокс для волос', category: 'Уход волос' },
      { value: 'Биксипластия', text: 'Биксипластия', category: 'Уход волос' },
      { value: 'Лёгкие локоны', text: 'Лёгкие локоны', category: 'Укладки' },
      { value: 'Укладка на брашинг', text: 'Укладка на брашинг', category: 'Укладки' },
      { value: 'Укладка на плойку (щипцы)', text: 'Укладка на плойку (щипцы)', category: 'Укладки' },
      { value: '3D локоны', text: '3D локоны', category: 'Укладки' },
      { value: 'Локоны косы', text: 'Локоны косы', category: 'Укладки' },
      { value: 'Одна косичка', text: 'Одна косичка', category: 'Плетение кос' },
      { value: 'Французская коса', text: 'Французская коса', category: 'Плетение кос' },
      { value: 'Афро косы', text: 'Афро косы', category: 'Плетение кос' },
      { value: 'Афро кудри', text: 'Афро кудри', category: 'Плетение кос' },
      { value: 'Маникюр', text: 'Маникюр', category: 'Маникюр и педикюр' },
      { value: 'Педикюр', text: 'Педикюр', category: 'Маникюр и педикюр' },
      { value: 'Наращивание ногтей', text: 'Наращивание ногтей', category: 'Маникюр и педикюр' },
      { value: 'Брови', text: 'Брови', category: 'Перманентный макияж' },
      { value: 'Губы', text: 'Губы', category: 'Перманентный макияж' },
      { value: 'Межресничка', text: 'Межресничка', category: 'Перманентный макияж' },
      { value: 'Удаление некачественного татуажа', text: 'Удаление некачественного татуажа', category: 'Перманентный макияж' },
      { value: 'Дневной макияж', text: 'Дневной макияж', category: 'Визаж' },
      { value: 'Вечерний макияж', text: 'Вечерний макияж', category: 'Визаж' },
      { value: 'Свадебный макияж', text: 'Свадебный макияж', category: 'Визаж' },
      { value: 'Оформление и окрашивание бровей', text: 'Оформление и окрашивание бровей', category: 'Оформление бровей' },
      { value: 'Коррекция бровей', text: 'Коррекция бровей', category: 'Оформление бровей' },
      { value: 'Удаление бровей воском', text: 'Удаление бровей воском', category: 'Оформление бровей' },
      { value: 'Удаление усиков воском', text: 'Удаление усиков воском', category: 'Оформление бровей' },
      { value: 'Классическое наращивание', text: 'Классическое наращивание', category: 'Наращивание ресниц' },
      { value: '2D', text: '2D', category: 'Наращивание ресниц' },
      { value: '3D', text: '3D', category: 'Наращивание ресниц' },
      { value: '4D', text: '4D', category: 'Наращивание ресниц' },
      { value: '5D', text: '5D', category: 'Наращивание ресниц' },
      { value: 'Гидропилинг', text: 'Гидропилинг', category: 'Косметологические услуги' },
      { value: 'Фруктовый', text: 'Фруктовый', category: 'Косметологические услуги' },
      { value: 'Миндальный', text: 'Миндальный', category: 'Косметологические услуги' },
      { value: 'Азелаиновый', text: 'Азелаиновый', category: 'Косметологические услуги' },
      { value: 'Anti - age Holy Land', text: 'Anti - age Holy Land', category: 'Косметологические услуги' },
      { value: 'Джесснера', text: 'Джесснера', category: 'Косметологические услуги' },
      { value: 'Карбоновый', text: 'Карбоновый', category: 'Косметологические услуги' },
      { value: 'Легкий ферментативный + альгинатная маска', text: 'Легкий ферментативный + альгинатная маска', category: 'Косметологические услуги' },
      { value: 'Ручная пластика лица', text: 'Ручная пластика лица', category: 'Косметологические услуги' },
      { value: 'Классический массаж лица', text: 'Классический массаж лица', category: 'Косметологические услуги' },
      { value: 'Вакуумный массаж лица с RF лифтингом', text: 'Вакуумный массаж лица с RF лифтингом', category: 'Косметологические услуги' },
      { value: 'СПА терапия лица 30 минут', text: 'СПА терапия лица 30 минут', category: 'Косметологические услуги' },
      { value: 'СПА терапия лица 45 минут', text: 'СПА терапия лица 45 минут', category: 'Косметологические услуги' },
      { value: 'СПА терапия лица 60 минут', text: 'СПА терапия лица 60 минут', category: 'Косметологические услуги' },
      { value: 'Чистка лица комбинированная', text: 'Чистка лица комбинированная', category: 'Косметологические услуги' },
      { value: 'Вакуумная чистка', text: 'Вакуумная чистка', category: 'Косметологические услуги' },
      { value: 'Нанонидлинг', text: 'Нанонидлинг', category: 'Косметологические услуги' },
      { value: 'Be Glow эффект тонального крема', text: 'Be Glow эффект тонального крема', category: 'Косметологические услуги' },
      { value: 'Фарфоровая куколка', text: 'Фарфоровая куколка', category: 'Косметологические услуги' },
      { value: 'Фонофорез', text: 'Фонофорез', category: 'Косметологические услуги' },
      { value: 'Криотерапия', text: 'Криотерапия', category: 'Косметологические услуги' },
      { value: 'Любой уход по типу кожи', text: 'Любой уход по типу кожи', category: 'Косметологические услуги' },
      { value: 'Фотоомоложение', text: 'Фотоомоложение', category: 'Косметологические услуги' },
      { value: 'Лазерное лечение акне', text: 'Лазерное лечение акне', category: 'Косметологические услуги' },
      { value: 'Укрепление и осветление сосудистой сетки (купероз)', text: 'Укрепление и осветление сосудистой сетки (купероз)', category: 'Косметологические услуги' },
      { value: 'Осветление и удаление пигментации', text: 'Осветление и удаление пигментации', category: 'Косметологические услуги' },
      { value: 'Микротоковая терапия лица', text: 'Микротоковая терапия лица', category: 'Косметологические услуги' },
      { value: 'Микротоковый массаж всего тела', text: 'Микротоковый массаж всего тела', category: 'Косметологические услуги' },
      { value: 'Бразильский силуэт (попка)', text: 'Бразильский силуэт (попка)', category: 'Косметологические услуги' },
      { value: 'Вакуумный массаж тела с RF лифтингом', text: 'Вакуумный массаж тела с RF лифтингом', category: 'Косметологические услуги' },
      { value: 'Миостимуляция', text: 'Миостимуляция', category: 'Косметологические услуги' },
      { value: 'Обертывание Омолаживающее', text: 'Обертывание Омолаживающее', category: 'Косметологические услуги' },
      { value: 'Обертывание Антицеллюлитное', text: 'Обертывание Антицеллюлитное', category: 'Косметологические услуги' },
      { value: 'Обертывание Детокс', text: 'Обертывание Детокс', category: 'Косметологические услуги' },
      { value: 'Обертывание Лимфодренажное', text: 'Обертывание Лимфодренажное', category: 'Косметологические услуги' },
      { value: 'Вакуумный массаж тела + обертывание', text: 'Вакуумный массаж тела + обертывание', category: 'Косметологические услуги' },
      { value: 'Миостимуляция + обертывание', text: 'Миостимуляция + обертывание', category: 'Косметологические услуги' },
      { value: 'Глубокое бикини + ягодицы', text: 'Глубокое бикини + ягодицы', category: 'Лазерная эпиляция' },
      { value: 'Подмышки', text: 'Подмышки', category: 'Лазерная эпиляция' },
      { value: 'Ноги полностью', text: 'Ноги полностью', category: 'Лазерная эпиляция' },
      { value: 'Ноги до колен', text: 'Ноги до колен', category: 'Лазерная эпиляция' },
      { value: 'Руки до локтей', text: 'Руки до локтей', category: 'Лазерная эпиляция' },
      { value: 'Руки полностью', text: 'Руки полностью', category: 'Лазерная эпиляция' },
      { value: 'Усики', text: 'Усики', category: 'Лазерная эпиляция' },
      { value: 'Баки', text: 'Баки', category: 'Лазерная эпиляция' },
      { value: 'Подбородок', text: 'Подбородок', category: 'Лазерная эпиляция' },
      { value: 'Сэт', text: 'Сэт', category: 'Лазерная эпиляция' }
    ];
  
    serviceSelect.innerHTML = '';
    
  
    function populateSelect(options) {
      options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        opt.setAttribute('data-category', option.category);
        serviceSelect.appendChild(opt);
      });
    }
    populateSelect(services);
  
    function filterOptionsByCategory(category) {
      // Удаляем все опции
      while (serviceSelect.options.length > 0) {
          serviceSelect.remove(0);
      }
      // Добавляем обратно только те, которые соответствуют выбранной категории
      services.forEach(service => {
          if (service.category === category) {
              const opt = document.createElement('option');
              opt.value = service.value;
              opt.textContent = service.text;
              opt.setAttribute('data-category', service.category);
              serviceSelect.appendChild(opt);
          }
      });
      serviceSelect.value = ''; // Сбрасываем выбранное значение
  }
  filterOptionsByCategory(selectedCategory);
  
  });
  async function submitForm(event) {
    event.preventDefault(); 
    try {
      const response = await fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target)
      });
      if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw ('Ошибка обработки. Ответ не JSON');
      }
      const json = await response.json();
      if (json.result === "success") {
        alert(json.info);
      } else { 
        console.log(json);
        throw (json.info);
      }
    } catch (error) { 
      alert(error);
    }
  }
  
  
  
  // Ссылки на элементы
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