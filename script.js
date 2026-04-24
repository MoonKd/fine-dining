let navigating = false;

function navigate(target) {
  if (navigating) return;
  navigating = true;

  const curtain = document.getElementById('curtain');

  // Gentle light bloom in
  curtain.style.transition = 'opacity 0.45s ease';
  curtain.style.opacity = '1';

  setTimeout(() => {
    // Switch page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const next = document.getElementById('page-' + target);
    next.classList.add('active');

    const body = next.querySelector('.menu-body');
    if (body) body.scrollTop = 0;

    // Gentle light bloom out
    curtain.style.transition = 'opacity 0.55s ease';
    curtain.style.opacity = '0';

    setTimeout(() => {
      navigating = false;
    }, 580);
  }, 460);
}
