function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let cols = document.querySelectorAll('.container tbody tr td');
      const search = document.getElementById('searchField').value;
      for (let col of cols) {
         if (col.textContent.includes(search) && search !== '') {
            col.parentElement.classList.add('select');
         }
      }
   }
}