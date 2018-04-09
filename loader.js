var t =  setTimeout(disaper,20800);
function enter() {
    var afterload = document.getElementById('afterLoad');
    afterload.style.visibility = 'hidden';
    console.log(afterload);
}
function disaper(){
    var loader = document.getElementById('loader');
    loader.style.visibility = 'hidden';
}
