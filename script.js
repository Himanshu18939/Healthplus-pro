// Add click event listeners to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Do something when link is clicked
    console.log(`Clicked link: ${link.textContent}`);
  });
});
