const thm = document.getElementById('theme');
const icon = document.querySelector('i');
thm.addEventListener('click', () => {
    // Check current theme
    if (document.body.getAttribute('data-theme') === 'dark') {
        // Switch to Light Mode
        document.body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        // Switch to Dark Mode
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});