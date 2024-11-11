document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollintoView({
            behavior: 'smooth'
        });
    });
});
