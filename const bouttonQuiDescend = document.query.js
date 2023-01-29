const bouttonQuiDescend = document.querySelector('.bouttonQuiDescend');

bouttonQuiDescend.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})