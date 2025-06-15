const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');
const disableScrollModal = () =>
  document.body.classList.toggle('is-scroll-disabled');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

modalBtnOpen.addEventListener('click', disableScrollModal);
modalBtnClose.addEventListener('click', disableScrollModal);