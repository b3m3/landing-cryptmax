const select = () => {
  const btn = document.querySelector('.header-best__select-btn');
  const items = document.querySelectorAll('.header-best__select-item');

  btn.addEventListener('click', () => btn.classList.toggle('active'));

  items.forEach(item => {
    item.addEventListener('click', () => {
      btn.querySelector('span').textContent = item.textContent;
      btn.classList.remove('active');
    });
  });
  
};

export default select;