function an(element, contentC) {
    var btn = document.getElementById("btnz");
    var b = document.getElementsByClassName('btn');
    element.style.left = "0";
    setTimeout(function() {
        element.style.top = "0";
        element.style.height = "100vh";
    }, 1000);
    setTimeout(function() {
        document.getElementsByClassName('content')[contentC].style.display = "block";

    }, 1500);
}

function cl(element, contentC) {
    element.style.top = "50%";
    element.style.height = "1vh";
    setTimeout(function() {
        element.style.left = "-100%";
    }, 1000);
    setTimeout(function() {
        var btn = document.getElementById("btnz");
        var b = document.getElementsByClassName('btn');

    }, 1000);
    document.getElementsByClassName('content')[contentC].style.display = "none";
}