const burgerMenu = (btnSelector, menuSelector, overlaySelector, btnActive, menuActive, overlayActive, closeSelector, offset='10px') => {
    const burgerBtn = document.querySelector(btnSelector),
          burgerMenu = document.querySelector(menuSelector),
          overlay = document.querySelector(overlaySelector),
          close = document.querySelector(closeSelector),
          body = document.querySelector('body');
          
    burgerBtn.addEventListener('click', function() {
        if(!this.classList.contains(btnActive)) {
            this.classList.add(btnActive);
            burgerMenu.classList.add(menuActive);
            overlay?.classList.add(overlayActive);
            body.style.overflow = "hidden";
            body.style.paddingRight = `${offset}px`;
        }else {
            this.classList.remove(btnActive);
            burgerMenu.classList.remove(menuActive);
            overlay?.classList.remove(overlayActive);
            body.style.overflow = 'unset';
            body.style.paddingRight = 'unset';
        }
    });
    close.addEventListener('click', () => {
        burgerBtn.classList.remove(btnActive);
        burgerMenu.classList.remove(menuActive);
        overlay?.classList.remove(overlayActive);
        body.style.overflow = 'unset';
        body.style.paddingRight = 'unset';
    })
}


export {burgerMenu};