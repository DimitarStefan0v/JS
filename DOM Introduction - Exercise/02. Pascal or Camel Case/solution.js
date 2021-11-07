function solve() {
  let textArray = document.getElementById('text').value.split(' ');
  let namingConvention = document.getElementById('naming-convention').value;
  let resultText = [];
  if (namingConvention == 'Camel Case') {
    resultText.push(textArray[0].toLowerCase());

    for (let i = 1; i < textArray.length; i++) {
      resultText.push(textArray[i][0].toUpperCase() + textArray[i].slice(1).toLowerCase());
    }
  } else if (namingConvention == 'Pascal Case') {
    resultText = textArray.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase());
  } else {
    resultText.push('Error!');
  }

  document.getElementById('result').textContent = resultText.join('');
}