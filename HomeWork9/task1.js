window.onload = function(){
    let myDiv = document.getElementById("myDiv")
    let myA = document.getElementById("a");
    let myB = document.getElementById("b");
    
    document.getElementById('mySubmit').onclick = function (e) {
        e.preventDefault();
        let request = new XMLHttpRequest();
        request.open("POST", 'CalcHandler.ashx');
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200)
                myDiv.innerHTML = request.responseText;
        }
      request.send("a=" + myA.value + "&b=" + myB.value);
    }
}
