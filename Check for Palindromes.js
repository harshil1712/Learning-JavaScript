function palindrome(str) {

 str = str.toLowerCase();
    var arr0 = str.replace(/[^a-z0-9]/gi , "");
                  
    var arr1 = arr0.split("");
    var arr2 = arr1.reverse();
    var arr3 = arr2.join("");
  if(arr3 == arr0)
  {
    
  return true;
  }
    else{
      return false;
    }
}



palindrome("never odd or even");
