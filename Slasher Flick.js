function slasher(arr, howMany) {
  
  var a = arr.splice(howMany);
  return a;
}

slasher([1, 2, 3], 2);
