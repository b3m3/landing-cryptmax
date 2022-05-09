const select = (button, elements) => {
  const btn = document.querySelector(button);
  const items = document.querySelectorAll(elements);

  btn.addEventListener('click', () => btn.classList.toggle('active'));

  items.forEach(item => {
    item.addEventListener('click', () => {
      btn.querySelector('span').textContent = item.textContent;
      btn.classList.remove('active');
    });
  });
  
};

export default select;