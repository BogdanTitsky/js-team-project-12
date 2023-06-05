document
  .getElementById('open-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('footer-modal').classList.add('open');
  });

document
  .getElementById('close-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('footer-modal').classList.remove('open');
  });
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('footer-modal').classList.remove('open');
  }
});

console.log('FOOTER');
