document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  