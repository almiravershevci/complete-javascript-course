'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnCloseModal);
const btnOpenModal = document.querySelectorAll('.show-modal'); //+ All to select all same elements, because querySelector only selects the 1st one.
console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove('hidden'); // the . when calling .hidden class is used only when we select with querySelector.
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
