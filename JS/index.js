import speakersData from './data.js';

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

// Build Featured Speakers section
function updateCardLayout() {
    const featuredSpeakersSection = document.createElement('section');
    featuredSpeakersSection.classList.add('featured-speakers');
  
    const programTitle = document.createElement('div');
    programTitle.classList.add('program-title');
    const programTitleHeading = document.createElement('h4');
    programTitleHeading.textContent = 'Featured Speakers';
    const programTitleLine = document.createElement('div');
    programTitleLine.classList.add('line');
  
    programTitle.appendChild(programTitleHeading);
    programTitle.appendChild(programTitleLine);
  
    featuredSpeakersSection.appendChild(programTitle);
  
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('featured-speakers-cards');
    cardContainer.style.display = 'flex';
    cardContainer.style.flexWrap = 'wrap';
  
    speakersData.forEach((speaker, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      if (window.innerWidth >= 769 || index < 2) {
        if (window.innerWidth >= 769) {
          card.style.width = '50%';
          card.style.paddingLeft = '0';
          card.style.marginBottom = '40px';
          card.style.order = index % 2 === 0 ? '0' : '1';
        } else {
          card.style.width = '100%';
          card.style.paddingLeft = '0';
          card.style.marginBottom = '40px';
        }
  
        const speakerImage = document.createElement('div');
        speakerImage.classList.add('speaker-image');
        const image = document.createElement('img');
        image.src = speaker.image;
        image.alt = `picture of ${speaker.name}`;
        speakerImage.appendChild(image);
  
        const speakerInfo = document.createElement('div');
        speakerInfo.classList.add('speaker-info');
  
        const speakerList = document.createElement('ul');
        speakerList.classList.add('speaker');
  
        const speakerName = document.createElement('li');
        speakerName.classList.add('speaker-name');
        speakerName.textContent = speaker.name;
  
        const speakerProfession = document.createElement('li');
        speakerProfession.classList.add('speaker-profession');
        speakerProfession.textContent = speaker.profession;
  
        const speakerLine = document.createElement('li');
        const speakerLineDiv = document.createElement('div');
        speakerLineDiv.classList.add('line2');
        speakerLine.appendChild(speakerLineDiv);
  
        const speakerBackground = document.createElement('li');
        speakerBackground.classList.add('speaker-background');
        speakerBackground.textContent = speaker.background;
  
        speakerList.appendChild(speakerName);
        speakerList.appendChild(speakerProfession);
        speakerList.appendChild(speakerLine);
        speakerList.appendChild(speakerBackground);
  
        speakerInfo.appendChild(speakerList);
  
        card.appendChild(speakerImage);
        card.appendChild(speakerInfo);
  
        cardContainer.appendChild(card);
      }
    });
  
    featuredSpeakersSection.appendChild(cardContainer);
  
    const existingSection = document.querySelector('.featured-speakers');
    existingSection.parentNode.replaceChild(featuredSpeakersSection, existingSection);
  }
  
  window.addEventListener('resize', updateCardLayout);
  updateCardLayout();
  
  