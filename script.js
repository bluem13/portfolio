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
//header scrolling visibilty
document.addEventListener('DOMContentLoaded', function() {
    const headerSection = document.getElementById('header');

    function checkVisibility() {
        const rect = headerSection.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
                          (rect.bottom >= 0 && rect.top <= window.innerHeight);

        if (isVisible) {
            headerSection.classList.add('visible');
        } else {
            headerSection.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case it's already in view
});
//footer scrolling visibility
document.addEventListener('DOMContentLoaded', function() {
    const footerSection = document.getElementById('footer');

    function checkVisibility() {
        const rect = footerSection.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
                          (rect.bottom >= 0 && rect.top <= window.innerHeight);

        if (isVisible) {
            footerSection.classList.add('visible');
        } else {
            footerSection.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case it's already in view
});
