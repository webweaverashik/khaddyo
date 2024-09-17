// Scroll to top button settings
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});