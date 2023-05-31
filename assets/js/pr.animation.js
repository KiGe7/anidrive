document.addEventListener('DOMContentLoaded', () => {

    anime.timeline({
        easing: 'easeOutExpo',
        duration: 700,
    }).add({
        targets: '.anihead .logo',
        opacity: [0, 1],
        translateX: [-20, 0],
        offset: 3200,
    }).add({
        targets: '.anihead .navbar .menu > ul > li,.anihead .lang',
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: (el, i) => 100 * i,
        offset: '-=400',
    }).add({
        targets: '.subani .line',
        width: ['0px', '70px'],
        offset: '-=400',
    }).add({
        targets: '.subani .title, .subani .button, .subani .uk-breadcrumb',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: (el, i) => 500 * i,
        offset: '-=400',
    }).add({
        targets: '.subani .page-title, .pr__hero .category',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: (el, i) => 200 * i,
        offset: '-=700',
    }).add({
        targets: '.item.feature-box',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (el, i) => 200 * i,
        offset: '-=400',
    }).add({
        targets: '.item.feature-box > .inner > *',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: (el, i) => 50 * i,
        offset: '-=900',
    })

});