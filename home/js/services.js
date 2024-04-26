function showServices(category) {
    // Получить список услуг
    var servicesList = document.getElementById('services-list');
    
    // Очистить список услуг
    servicesList.innerHTML = '';
    
    // Заполнить список услуг в зависимости от выбранной категории
    if (category === 'category1') {
      servicesList.innerHTML = `
        <li>Услуга 1</li>
        <li>Услуга 2</li>
        <li>Услуга 3</li>
      `;
    } else if (category === 'category2') {
      servicesList.innerHTML = `
        <li>Услуга 4</li>
        <li>Услуга 5</li>
        <li>Услуга 6</li>
      `;
    } else if (category === 'category3') {
      servicesList.innerHTML = `
        <li>Услуга 7</li>
        <li>Услуга 8</li>
        <li>Услуга 9</li>
      `;
    } else if (category === 'category4') {
      servicesList.innerHTML = `
        <li>Услуга 10</li>
        <li>Услуга 11</li>
        <li>Услуга 12</li>
      `;
    } else if (category === 'category5') {
      servicesList.innerHTML = `
        <li>Услуга 13</li>
        <li>Услуга 14</li>
        <li>Услуга 15</li>
      `;
    } else if (category === 'category6') {
      servicesList.innerHTML = `
        <li>Услуга 16</li>
        <li>Услуга 17</li>
        <li>Услуга 18</li>
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