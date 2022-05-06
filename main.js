window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEnd = sectionTop + sectionHeight;

    const sectionTopReachedTargetLine = sectionTop <= targetLine;
    const sectionEndReachedTargetLine = sectionEnd <= targetLine;

    const sectionBoundaries = sectionTopReachedTargetLine && !sectionEndReachedTargetLine;

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`);
    
    menuElement.classList.remove('active');

    if (sectionBoundaries) menuElement.classList.add('active');
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 1250) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '3rem',
    duration: 700
}).reveal('#home, #home img, #home .stats, #home .stat, #services .card, #about, #about header, #about .content, #contact');

