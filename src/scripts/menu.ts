const menuButton = document.getElementById('menuButton');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const navBar = document.getElementById('navBar');
const menu = document.getElementById('menu');

function toggleMenu() {
  if (!menu || !navBar || !openIcon || !closeIcon) return;
  if (menu.classList.contains('hidden')) {
    navBar.classList.add('sticky');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    navBar.classList.remove('sticky');
  }
}

menuButton?.addEventListener('click', toggleMenu);

document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu());
});
