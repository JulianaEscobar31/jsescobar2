function mostrar(selected) {
    if (selected) {
        document.getElementById("InfoConf").style.display="block";
    }else {
        document.getElementById("InfoConf").style.display="none";
    }
}

function ocultar(selected) {
    if(selected) {
        document.getElementById ("InfoConf").style.display = "none";
        document.getElementById ("enviarDir").style.display = "block";
    }
    if (!selected){
        document.getElementById ("enviarDir").style.display ="none";
    }
}