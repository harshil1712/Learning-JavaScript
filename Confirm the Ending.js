function confirmEnding(str, target) {
var arr = "";
    if(target == str.substr(str.length - target.length, target.length)){
        return true;
    }
    else{
    return false;
    }
}

confirmEnding("He has to give me a new name", "name");
