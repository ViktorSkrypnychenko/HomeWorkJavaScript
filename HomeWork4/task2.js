window.onload = function(){

    let myBody = document.getElementById('myBody');
    let myP = document.getElementById('myP');

    myBody.onkeypress = function(k){
        if (event.code == "KeyR") {
          myP.style.color = "red"  
        } else if(k.charCode ==103){
            myP.style.color = "green"
        } else if(k.charCode ==98){
            myP.style.color = "blue"
        }
    }
}