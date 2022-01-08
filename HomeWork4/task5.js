window.onload = function(){
document.getElementById('myDiv').addEventListener('copy', function(e) {
    alert('Copying prohibited');
    e.preventDefault();
});
}