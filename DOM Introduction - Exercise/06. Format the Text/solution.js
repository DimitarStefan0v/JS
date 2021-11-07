function solve() {
    let textAarray = document.getElementById('input').value.split('.').filter(x => x.length > 0);
    let output = document.getElementById('output');

    for (let i = 0; i < textAarray.length; i+=3) {
      let arr = [];
      for (let j = 0; j < 3; j++) {
        if (textAarray[i + j]) {
          arr.push(textAarray[i + j]);
        }
      }

      let paragraph = arr.join('.') + '.';
      output.innerHTML += `<p>${paragraph}</p>`;
    }
}