// script.js

// Store and retrieve user preference (e.g., preferred button color)
function setUserPreference(color) {
    localStorage.setItem('preferredColor', color);
  }
  
  function getUserPreference() {
    return localStorage.getItem('preferredColor');
  }
  
  // Apply stored preference to button on load
  const btn = document.getElementById('animateBtn');
  const savedColor = getUserPreference();
  if (savedColor) {
    btn.style.backgroundColor = savedColor;
  }
  
  // Animation triggered by user action (click)
  btn.addEventListener('click', () => {
    // Trigger CSS animation
    btn.classList.add('animate-bounce');
  
    // Remove animation class after it ends so it can be triggered again later
    btn.addEventListener('animationend', () => {
      btn.classList.remove('animate-bounce');
    }, { once: true });
  
    // Save a new preference on click (changing to tomato color)
    setUserPreference('#ff6347');
    btn.style.backgroundColor = '#ff6347';
  });
  