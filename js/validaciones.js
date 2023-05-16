var expresion = {
    correo: /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i,
    telefono: /^\d{10}$/,
};

function validarCorreo(){
    var valor = document.getElementById("email").value;
    if (expresion.correo.test(valor)){
        return true;
    } else {
        alert ("El correo ingresado no es válido.")
        return false;
    }
}

function validarTelefono () {
    var valor = document.getElementById("telefono").value;
    if(valor.length == 10 && !isNaN(valor)) {
        return true;
    }else {
        alert("El teléfono ingresado no es válido.")
        return false;
    }
}

function validar() {
    if(validarCorreo() == true && validarTelefono() == true){
        return true;
    } else {
        return false;
    }
}

function deshabilitarBtn() { 
    if (validar() == true){
        var boton = document.getElementById("btnEnviar");
        boton.disabled = true;
        boton.value = "Enviando datos ...........";
        this.form.submit();
    }
}
