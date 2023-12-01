var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich = document.querySelector('.card.which p:last-child');
var eCode = document.querySelector('.card.code p:last-child');
var alert = document.querySelector('.alert');
var box = document.querySelector('.box');
var result = document.querySelector('.result');

document.addEventListener('keydown', e=> {
    // Đổ thông tin
    eKey.textContent = e.key
    eLocation.textContent = e.location
    eWhich.textContent = e.which
    eCode.textContent = e.code
    result.innerHTML = e.code

    alert.classList.add('hide');
    box.classList.remove('hide');
})