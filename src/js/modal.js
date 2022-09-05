(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-open'),
    closeModalBtn: document.querySelector('.close-modal'),
    modal: document.querySelector('.modal-js'),
    body: document.querySelector('body'),
  };
  document.body.addEventListener('click', toggleModal);
  // refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    if (
      event.target.classList.contains('modal-open') ||
      event.target.classList.contains('close-modal')
    ) {
      console.log('2');
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  }
})();
