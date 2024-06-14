const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}

const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1200,
}

const scrollrevealOption2 = {
    distance: '50px',
    origin: 'left',
    duration: 1200,
}

const scrollrevealOption3 = {
    distance: '50px',
    origin: 'right',
    duration: 1200,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .image' ,{
    ...scrollrevealOption2,
    delay:400,
})

ScrollReveal().reveal('.about .about-title',{
    ...scrollrevealOption3,
    delay:400,
})
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption3,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption3,
    delay:1200,
})
ScrollReveal().reveal('.about .btn-explore',{
    ...scrollrevealOption3,
    delay:1500,
})
ScrollReveal().reveal('header .btn-explore',{
    ...scrollrevealOption,
    delay:1800,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1000,
})
ScrollReveal().reveal('.destination .card .content-card  p',{
    ...scrollrevealOption,
    delay:1400,
})
ScrollReveal().reveal('.destination .card .content-card .btn-read',{
    ...scrollrevealOption,
    delay:1800,
})

ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)