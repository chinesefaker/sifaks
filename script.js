const moreMenu = document.getElementById('moreMenu');
const moreBtn = document.getElementById('moreBtn');

if (moreMenu && moreBtn) {
  const closeMenu = () => {
    moreMenu.classList.remove('open');
    moreBtn.setAttribute('aria-expanded', 'false');
  };

  moreBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = moreMenu.classList.toggle('open');
    moreBtn.setAttribute('aria-expanded', String(isOpen));
  });

  moreMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      moreBtn.focus();
    }
  });
}
