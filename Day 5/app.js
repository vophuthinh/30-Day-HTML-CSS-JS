var btnSearch =  document.querySelector('.search-box_btn');

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.siblingElement.classList.toggle('hide');
})