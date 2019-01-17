const grid = document.querySelector('.grid');

grid.addEventListener('mouseover', (e) => {
   if (e.target.nodeName === 'SPAN') {
      e.target.classList.add('activate');
   }
});