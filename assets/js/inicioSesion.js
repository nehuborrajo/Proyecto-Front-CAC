let formRegistro = document.querySelector("#form_is") //selecciono el form

let validarDatos = (event) => {
    event.preventDefault(); //detengo el evento 'submit' (envio de datos)

    //bandera
    let validacion = true;
    
    //validamos antes de enviar los datos

    //CONTRASEÑA
    let inputContrasenia = document.querySelector("#contraseniaUsuario")
    if(inputContrasenia.value === ""){
        let divError = document.querySelector("#errorContrasenia")
        divError.textContent = "El campo no debe quedar vacio"
        divError.classList.add("error")
        inputContrasenia.classList.add("cuadroError")

        validacion = false;
    }
    else if(inputContrasenia.value.length < 6 || inputContrasenia.value.length > 12){    
        let divError = document.querySelector("#errorContrasenia")
        divError.textContent = "El campo debe tener minimo 6 caracteres y maximo 12"
        divError.classList.add("error")
        inputContrasenia.classList.add("cuadroError")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorContrasenia")
        divError.classList.add("oculto")
        inputContrasenia.classList.add("cuadroBien")
    }

    //EMAIL
    let inputEmail = document.querySelector("#emailUsuario")
    let email = document.querySelector("#emailUsuario").value
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(email);
    if(esValido == false){
        let divError = document.querySelector("#errorEmail")
        divError.textContent = "Debe introducir un correo valido"
        divError.classList.add("error")
        inputEmail.classList.add("cuadroError")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorEmail")
        divError.classList.add("oculto")
    }


    if(validacion){ //si esta todo ok, enviamos los datos

    formRegistro.submit(); 
    alert("Inicio sesion correctamente"); 
    }
}

formRegistro.addEventListener("submit", validarDatos) //cuando hago se da el evento 'submit' se activa "validarDatos"