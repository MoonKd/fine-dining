let navigating = false;

function navigate(target) {
  if (navigating) return;
  navigating = true;

  const curtain = document.getElementById('curtain');

  // Drop curtain from top
  curtain.style.cssText = 'transform: translateY(-100%); transition: none;';
  void curtain.offsetWidth;
  curtain.style.cssText = 'transform: translateY(0); transition: transform 0.55s cubic-bezier(0.76, 0, 0.24, 1);';

  setTimeout(() => {
    // Switch page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const next = document.getElementById('page-' + target);
    next.classList.add('active');

    // Reset scroll
    const body = next.querySelector('.menu-body');
    if (body) body.scrollTop = 0;

    // Rise curtain downward
    curtain.style.cssText = 'transform: translateY(0); transition: none;';
    void curtain.offsetWidth;
    curtain.style.cssText = 'transform: translateY(100%); transition: transform 0.55s cubic-bezier(0.76, 0, 0.24, 1);';

    setTimeout(() => {
      curtain.style.cssText = 'transform: translateY(-100%); transition: none;';
      navigating = false;
    }, 580);
  }, 580);
}
