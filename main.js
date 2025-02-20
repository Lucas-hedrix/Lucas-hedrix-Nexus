// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect
  const typewriterElement = document.getElementById('typewriter');
  const text = "CYBERNEXUS";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.innerHTML = text.substring(0, index + 1) + '<span class="typewriter-caret"></span>';
      index++;
      setTimeout(typeWriter, 150);
    }
  }

  // Start typewriter effect after 1 second
  setTimeout(typeWriter, 1000);

  // Email functionality with confirmation
  const projectBtn = document.getElementById('projectBtn');

  projectBtn.addEventListener('click', (e) => {
    // Confirmation dialog
    const confirmStart = confirm('You\'re about to open your email client. Continue?');

    if (confirmStart) {
      // Open email client with pre-filled details
      const subject = encodeURIComponent('Web Project Inquiry');
      const body = encodeURIComponent('Hello Nexus Team,\n\nI would like to discuss a project...');
      window.location.href = `mailto:gishisrael432@gmail.com?subject=${subject}&body=${body}`;

      // Button animation feedback
      projectBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        projectBtn.style.transform = 'scale(1)';
      }, 200);
    }
  });

  // Smooth background transition effect
  let scrollPos = 0;
  const background = document.querySelector('body');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > scrollPos) {
      background.style.backgroundPositionY = `${currentScroll * 0.5}px`;
    } else {
      background.style.backgroundPositionY = `${currentScroll * 0.3}px`;
    }
    scrollPos = currentScroll;
  });

  // Hover effect for contact info
  document.querySelector('.contact').addEventListener('mouseover', () => {
    document.querySelector('.phone-number').style.color = '#4CAF50';
  });

  document.querySelector('.contact').addEventListener('mouseout', () => {
    document.querySelector('.phone-number').style.color = '#fff';
  });
});