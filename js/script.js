
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
