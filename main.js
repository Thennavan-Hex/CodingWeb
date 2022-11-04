const handburger = document.querySelector('.handburger');

handburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});