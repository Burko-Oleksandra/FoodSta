(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.modal-open'),
    closeModalBtn: document.querySelectorAll('.close-modal'),
    modal: document.querySelector('.modal-js'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.forEach(item => {
    item.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.forEach(item => {
    item.addEventListener('click', toggleModal);
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
