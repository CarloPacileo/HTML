let youtube = document.getElementById("youtube");
let tiktok = document.getElementById("tiktok");
let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");

function acceso(span) {
    let img = span.querySelector('img');
    if (img) img.style.border = "1px solid red";
    return true;
}

function spento(span) {
    let img = span.querySelector('img');
    if (img) img.style.border = "1px solid transparent";
    return true;
}
