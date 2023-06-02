const apparitionFond = document.querySelector('header')
const apparitionTextTop = document.querySelector('.header-p')

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} =
    document.documentElement;

    if(scrollTop > 270){
        apparitionFond.classList.add('active')
    }
    if(scrollTop > 430){
        apparitionTextTop.classList.add('active')
    }

    if(scrollTop < 297){
        apparitionFond.classList.remove('active')
    }

    if(scrollTop < 440){
        apparitionTextTop.classList.remove('active')
    }

    if(scrollTop > 880){
        apparitionFond.classList.add('blanc')
    }

    if(scrollTop < 890){
        apparitionFond.classList.remove('blanc')
    }
    console.log(scrollTop)
})