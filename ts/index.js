var btnClose = document.getElementsByClassName("btn-cls")[0];
btnClose.addEventListener("click", function () {
    document.getElementById("sidenav").style.width = '0px';
    document.getElementById("sidenav-nav").style.display = 'none';
});
var collapse = document.getElementsByClassName("collapse")[0];
collapse.addEventListener("click", function () {
    document.getElementById("sidenav").style.width = '100%';
    window.setTimeout(function () { return document.getElementById("sidenav-nav").style.display = 'block'; }, 300);
});
