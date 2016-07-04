function reverseString(str) {
  var arr = [];
    arr= str.split("");
  var newArr = arr.reverse();
  var ans = newArr.join("");
  return ans;
}

reverseString("hello");
