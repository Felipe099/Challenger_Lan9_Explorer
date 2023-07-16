const theme = document.querySelector('body');
const modeDark = document.querySelector('.themeDark');
const modeLight = document.querySelector('.themeLight');

/* MODO DARK AND LIGHT*/
modeDark.addEventListener('click', () => {
    modeDark.classList.add('hide');
    modeLight.classList.remove('hide');
    theme.classList.remove('bodyDark');
});

modeLight.addEventListener('click', () => {
    modeDark.classList.remove('hide');
    modeLight.classList.add('hide');
    theme.classList.add('bodyDark');
});

const selectedButton = document.querySelector('.products');
const modalOpen = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalClose = document.querySelector('.modal button.close');

selectedButton.addEventListener('click', () => {
    modalOpen.classList.add('open');
});

modalClose.addEventListener('click', () => {
    modalOpen.classList.remove('open');
});

window.addEventListener('keydown', closePressButtonEsc);

function closePressButtonEsc(event) {
    if (event.key === 'Escape') {
        modalOpen.classList.remove('open');
    }

}
