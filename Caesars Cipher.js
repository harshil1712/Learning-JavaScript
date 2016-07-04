function rot13(str) {
 var a;
 var b = "";
    for(var i = 0; i<str.length; i++){
        a = str.charCodeAt(i);
     
        if(a<78 &&  a>=65){
            a +=13;
        }
        else if(a>=78 && a<=90){
            a -= 13;
        }
      
        b += String.fromCharCode(a);
     
    }
  return b;
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
