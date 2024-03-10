
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav__list');
    const tittle  = document.querySelector('.cover__tittle')

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        

    });

