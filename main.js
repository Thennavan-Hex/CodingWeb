const hamburger = document.querySelector('.handburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});