window.addEventListener('load', e => {
    let header = document.getElementsByTagName('header')[0]
    let firstNav = document.getElementsByTagName('nav')[0]

    let prevScroll = 0
    window.addEventListener('scroll', e => {
        if (window.scrollY < firstNav.parentElement.offsetTop && firstNav.classList.contains('fixed')) {
            firstNav.classList.remove('fixed')
            console.log('removed class')
        }
        else if (window.scrollY > firstNav.parentElement.offsetTop && !firstNav.classList.contains('fixed')) {
            firstNav.classList.add('fixed')
            console.log('added class')
        }

    })
})