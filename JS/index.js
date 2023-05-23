const nav = document.querySelector('.my-nav');

const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';
menuToggle.style.cursor = 'pointer';

nav.appendChild(menuToggle);

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('nav-mobile');

const closeIcon = document.createElement('div');
closeIcon.classList.add('close-icon');
closeIcon.innerHTML = '&#10005;';
closeIcon.style.cursor = 'pointer';

const menuItems = document.createElement('ul');
menuItems.classList.add('menu-list');

const menuOptions = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about-me.html' },
  { label: 'Program', href: 'index.html#program' },
  { label: 'Join', href: '#join' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

menuOptions.forEach((option) => {
  const menuItem = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.href = option.href;
  menuLink.textContent = option.label;

  menuItem.appendChild(menuLink);
  menuItems.appendChild(menuItem);
});

nav.appendChild(menuToggle);

mobileMenu.appendChild(closeIcon);
mobileMenu.appendChild(menuItems);

function openMenu() {
  document.body.classList.add('menu-open');
  nav.appendChild(mobileMenu);
}

function closeMenu() {
  document.body.classList.remove('menu-open');
  nav.removeChild(mobileMenu);
}

menuToggle.addEventListener('click', openMenu);

closeIcon.addEventListener('click', closeMenu);
