function findLongestWord(str) {
  var length = 0;
  var arr = str.split(" ");
  var a = arr.length;
  for(var i = 0; i < a; i++)
    {
      if(arr[i].length > length){
        length = arr[i].length;
      }
    }
  return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
