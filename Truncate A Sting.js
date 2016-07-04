function truncateString(str, num) {
  // Clear out that junk in your trunk
  var a = "";
  var b = "";
  if(num > 3){
    if(str.length>num){
    a = str.slice(0, num-3);
    b =a + "...";
  }
  else{
    b = str;
  }
  }
  else if(num == str.length){
    b= str;
  }
  else {
    a = str.slice(0, num);
    b= a + "...";
  }
  return b;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
