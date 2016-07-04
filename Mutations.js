function mutation(arr) {
  var arr1 = arr[0].toLowerCase().split('');
  var arr2 = arr[1].toLowerCase().split('');
  for (var i=0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) == -1 ) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);
