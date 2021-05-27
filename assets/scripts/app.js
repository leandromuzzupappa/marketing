window.addEventListener("load", () => {
    let menuMobileBtn = document.querySelector(".menuMobile__btn");
    if (menuMobileBtn) {
        let menuMobile = document.querySelector(".menuMobile");

        menuMobileBtn.addEventListener("click", () => {
            menuMobileBtn.classList.toggle("menuMobile__btn--open");
            menuMobile.classList.toggle("menuMobile--open");
        });
    }
});
