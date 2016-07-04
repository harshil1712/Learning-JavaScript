function getIndexToIns(arr, num) {
  
  var a = arr.concat(num).sort(function compareNumbers(a, b) {
  return a - b;
});
    var b = a.indexOf(num);
    
    return b;
}

getIndexToIns([40, 60], 50);
