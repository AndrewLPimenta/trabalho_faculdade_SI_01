document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.foto1');

  function handleScroll() {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        img.classList.add('visible');
      }
    });
  }


  handleScroll();
  window.addEventListener('scroll', handleScroll);
});