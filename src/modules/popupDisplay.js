import populatePopupWindow from './populatePopupWindow.js';

const popupDisplay = () => {
  const commentButtons = document.querySelectorAll('.btn');
  const popupWindow = document.querySelector('.popup-window');
  const body = document.querySelector('body');
  const popupBg = document.querySelector('#popup-bg');
  const closeBtn = document.querySelector('#close-btn');

  commentButtons.forEach((commentButton, index) => commentButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupWindow.classList.toggle('pop');
    body.classList.add('pop');
    popupBg.classList.add('pop');
    populatePopupWindow(index);
  }));

  // Add closing button function
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupWindow.classList.remove('pop');
    body.classList.remove('pop');
    popupBg.classList.remove('pop');
  });
};

export default popupDisplay;