const grid = document.querySelector('.grid');

const createSqr = () => {
   const span = document.createElement('span');
   grid.appendChild(span);
}

const createPlayground = () => {
   for (let i = 0; i < 1000; i++) {
      createSqr();
   }
}

createPlayground();

const playgroundLoaded = () => {
   const reset = document.querySelector('#reset');
   const spans = document.querySelectorAll('span');

   // Color the screen when mouseover
   grid.addEventListener('mouseover', (e) => {
      if (e.target.nodeName === 'SPAN') {
         e.target.classList.add('activate');
      }
   });

   // Reset screen
   reset.addEventListener('click', () => {
      spans.forEach((span) => {
         if (span.classList.contains('activate')) {
            span.classList.remove('activate');
         }
      })
   })

}

window.onload = playgroundLoaded();