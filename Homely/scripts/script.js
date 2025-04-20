window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(34,34,34,0.95)';
    } else {
        header.style.background = 'rgba(34,34,34,0.9)';
    }
});