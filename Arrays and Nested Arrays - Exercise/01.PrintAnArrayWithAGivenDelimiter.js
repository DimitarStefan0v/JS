function printArrayWithDelimeter(array, delimiter) {
    return array.join(delimiter);
}

console.log(printArrayWithDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'));

console.log(printArrayWithDelimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'));