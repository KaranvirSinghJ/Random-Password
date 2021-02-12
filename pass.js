function generate(){
    var result = "";
    const length = document.getElementById("plength").value;
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var sy = "!@#$%^&*()_+-=[]{};''<>?/";
    var num = "0123456789";
    var allowed = "";
    if (document.getElementById("ucase").checked){
        allowed += upper;
    }
    if (document.getElementById("lcase").checked){
        allowed += lower;
    }
    if (document.getElementById("num").checked){
        allowed += num;
    }
    if (document.getElementById("symbol").checked){
        allowed += sy;
    }
    if (allowed.length == 0){
        result += "No Fields selected!!!";
    }else if (length == 0){
        result += "Password length empty";
    }else{
        for (var i=0; i<length; i++){
            var random = Math.floor(Math.random()*allowed.length);
            result += allowed.substring(random, random+1);
        }
    }
    document.getElementById("pass").value = result;

}
