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
    checkVisibility(); //checks for initial visibility
});
//header scroll visibility
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header'); 

    function checkHeaderVisibility() {
        const rect = header.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

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
    const footer = document.querySelector('footer'); //same function but for footer

    function checkFooterVisibility() {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0; 

        if (isVisible) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility();
});

//button increase/decrease font size
document.addEventListener('DOMContentLoaded', function() {
    const increaseFontButton = document.getElementById('increase-font');
    const resetButton = document.getElementById('decrease-font');
    const contentToAdjust = document.getElementById('content-to-adjust'); // Or document.body, or another selector
  
    const defaultFontSize = parseFloat(window.getComputedStyle(contentToAdjust).fontSize);
    const step = 2; // Adjust the increment/decrement value as needed
    const maxFontSize = 30; // Optional: Maximum font size
  
    increaseFontButton.addEventListener('click', function() {
      let currentFontSize = parseFloat(window.getComputedStyle(contentToAdjust).fontSize);
      let newFontSize = Math.min(currentFontSize + step, maxFontSize); // Ensure it doesn't exceed max
      contentToAdjust.style.fontSize = `${newFontSize}px`;
    });
    resetButton.addEventListener('click', function() {
        contentToAdjust.style.fontSize = `${defaultFontSize}px`;});
  });

