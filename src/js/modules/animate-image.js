const animateImage = () => {
  document.addEventListener('click', e => {
    const image = document.querySelector('.image-intro__big img');
    const playBtn = document.querySelector('.image-intro__play');
    
    if (e.target.classList.contains('icon-play')) {
      image.classList.add('active');
      e.target.parentNode.classList.add('active');
    }

    if (!e.target.classList.contains('icon-play')) {
      playBtn.classList.remove('active');
      image.classList.remove('active');
    }
  });
};

export default animateImage;