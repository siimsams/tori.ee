const menuButton = document.getElementById('menuButton');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const menu = document.getElementById('menu');

function toggleMenu() {
  if (!menu || !openIcon || !closeIcon) return;
  const isHidden = menu.classList.toggle('hidden');
  openIcon.classList.toggle('hidden', !isHidden);
  closeIcon.classList.toggle('hidden', isHidden);
  document.body.style.overflow = isHidden ? '' : 'hidden';
}

menuButton?.addEventListener('click', toggleMenu);

document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu());
});
