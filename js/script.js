document.addEventListener("DOMContentLoaded", function() {
    const headerTop = document.querySelector('.header-top');
    headerTop.style.overflow = 'hidden'; // Prevent content from overflowing
    headerTop.style.whiteSpace = 'nowrap'; // Prevent line breaks

    const elements = document.querySelectorAll('.header-top li');
    elements.forEach(element => {
        element.style.display = 'inline-block'; // Display elements inline
        element.style.position = 'relative';
        element.style.animation = 'marquee 30s linear infinite'; // Set animation duration
    });
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
.header-top li {
    display: inline-block;
    white-space: nowrap;
}
`;
document.head.appendChild(style);

const container = document.querySelector('.insta-center-img');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

let currentPosition = 0;
const imageWidth = 8 * 16; // 8em in pixels (assuming 1em = 16px)
const visibleImages = 5;
const totalImages = container.children.length;

function updateButtons() {
    leftButton.disabled = currentPosition === 0;
    rightButton.disabled = currentPosition >= totalImages - visibleImages;
}

leftButton.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        container.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
        updateButtons();
    }
});

rightButton.addEventListener('click', () => {
    if (currentPosition < totalImages - visibleImages) {
        currentPosition++;
        container.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
        updateButtons();
    }
});

// Initialize button states on page load
updateButtons();
