const tabs = () => {
  const buttons = document.querySelectorAll('.navigation-popular__tabs-btn');
  const categories = document.querySelectorAll('.body-popular__items .item-card .item-card__body-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');

      categories.forEach(category => {
        const parent = category.closest('.item-card');
        
        if (btn.textContent == category.textContent) {
          parent.classList.remove('hide-card');
        } else {
          parent.classList.add('hide-card');
        }

        if (btn.textContent == buttons[0].textContent) {
          parent.classList.remove('hide-card');
        }

        if (!parent.classList.contains('hide-card')) {

        }
      });
    });
  });
};

export default tabs;