const openModalBtn = document.querySelectorAll('[data-btn]')
const modal = document.querySelectorAll('[data-modal]')
const closeModalBtn = document.querySelectorAll('[data-close="true"]')
const btnLength = openModalBtn.length
const closeBtnLength = closeModalBtn.length

function openModal() {
  for (let i = 0; i < btnLength; i++) {
    openModalBtn[i].addEventListener('click', function() {
      modal[i].classList.add('open');
    })
    closeModal(i)
  }
}

function closeModal(i) {
  for (let j = 0; j < closeBtnLength; j++) {
    closeModalBtn[j].addEventListener('click', function(event) {
      if (event.target.dataset.close) {
        modal[i].classList.remove('open')
      }
    })
  }
}

openModal()