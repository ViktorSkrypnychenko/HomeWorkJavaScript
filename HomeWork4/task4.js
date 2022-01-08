window.onload = function(){

    let myBody = document.getElementById("myBody");
    myBody.onkeydown = function (myKey){
        if(myKey.keyCode == 90 && myKey.ctrlKey){
            alert ("Save");
        } else if(myKey.keyCode == 65 && myKey.ctrlKey){
            alert("Select all");
        } else if(myKey.keyCode == 83 && myKey.ctrlKey && myKey.shiftKey){
            alert("Save all");
        }
    }
}