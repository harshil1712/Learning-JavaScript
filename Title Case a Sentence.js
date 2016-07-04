function titleCase(str) {
  var b = "";
  str = str.toLowerCase();
var a = str.split(" ");
for(var i = 0; i<a.length; i++)
    {
        
       b += " " +a[i].charAt(0).toUpperCase() + a[i].slice(!0);
    }
  return b.trim();
}

titleCase("I'm a little tea pot");
