const btnOpen = document.querySelector(".open-modal-btn");
const modal = document.querySelector('.modal');
const iconClose = document.querySelector('.modal_header i');
const btnClose = document.querySelector('.modal_footer button');

function toggleModal(event){
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(event){
    if(event.target === modal){
        toggleModal();
    }});