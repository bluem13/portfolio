//about scrolling visibilty
document.addEventListener('DOMContentLoaded', function() {
    const aboutMeSection = document.getElementById('aboutText');

    function checkVisibility() {
        const rect = aboutMeSection.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
                          (rect.bottom >= 0 && rect.top <= window.innerHeight);

        if (isVisible) {
            aboutMeSection.classList.add('visible');
        } else {
            aboutMeSection.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case it's already in view
});
//header scroll visibility
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header'); // Make sure to target your header correctly

    function checkHeaderVisibility() {
        const rect = header.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // Adjust your visibility condition as needed

        if (isVisible) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkHeaderVisibility);
    checkHeaderVisibility(); // Initial check
});
//footer scroll visibility
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer'); // Make sure to target your header correctly

    function checkFooterVisibility() {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // Adjust your visibility condition as needed

        if (isVisible) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Initial check
});