const accordians = document.querySelectorAll('.accordian');

accordians.forEach(acc => {
  acc.addEventListener('click', () => {
    const panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {
      setTimeout(() => {
        panel.style.color = '#fff';
      }, 150);
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      panel.style.color = '#000';
    }
  });
});
