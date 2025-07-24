document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href'); // Get the href (e.g., #about)
        const targetElement = document.querySelector(targetId); // Find the element

        if (targetElement) {
            // Smoothly scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
