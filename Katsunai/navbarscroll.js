const nav = document.querySelector('.navmenu');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  nav.classList.toggle('hidden', scrollTop > lastScrollTop);
  lastScrollTop = Math.max(scrollTop, 0);
});
