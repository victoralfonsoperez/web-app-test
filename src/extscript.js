// Main application script
console.log('extscript.js loaded successfully!');

// Example: Add some interactive functionality
const app = document.getElementById('app');

if (app) {
  const button = document.createElement('button');
  button.textContent = 'Click me!';
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
  app.appendChild(button);
}
