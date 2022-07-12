(function () {
    window.onload = () => {
        let header__burger = document.querySelector('.open__navbar');
        let header__menu = document.querySelector('.navbar');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e) => {
            header__menu.classList.toggle('active');
            body.classList.toggle('lock');
        })
    }
})();