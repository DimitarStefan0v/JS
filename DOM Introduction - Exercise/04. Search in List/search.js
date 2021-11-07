function search() {
   const towns = document.querySelectorAll('#towns li');
   const search = document.getElementById('searchText').value;
   let matches = 0;

   for (const town of towns) {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;

}