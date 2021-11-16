function create(words) {
   const mainDiv = document.getElementById('content');
   mainDiv.addEventListener('click', onClick);

   for (let word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      mainDiv.appendChild(div);
   }

   function onClick(ev) {
      if (ev.target.tagName = 'DIV' && ev.target != mainDiv) {
         ev.target.children[0].style.display = 'block';
      }
   }
}