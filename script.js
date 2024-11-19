// Example: Smooth Scroll to "Shop Now" Section
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector('.hero').offsetHeight,
        behavior: 'smooth'
    });
});
