let formRegistro = document.querySelector("#form_reg") //selecciono el form


let validarDatos = (event) => {
    event.preventDefault(); //detengo el evento 'submit' (envio de datos)

    //bandera
    let validacion = true;
    
    //validamos antes de enviar los datos

    //NOMBRE
    let inputNombre = document.querySelector("#nombreUsuario");
    if(inputNombre.value === ""){
        let divError = document.querySelector("#errorNombre")
        divError.textContent = "El campo no debe quedar vacio"
        divError.classList.add("error")
        inputNombre.classList.add("cuadroError")

        validacion = false;
    }
    else if(inputNombre.value.length < 3 || inputNombre.value.length > 12){    
        let divError = document.querySelector("#errorNombre")
        divError.textContent = "El campo debe tener minimo 3 caracteres y maximo 12"
        divError.classList.add("error")
        inputNombre.classList.add("cuadroError")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorNombre")
        divError.classList.add("oculto")
        inputNombre.classList.add("cuadroBien")
    }

    //APELLIDO
    let inputApellido = document.querySelector("#apellidoUsuario");
    if(inputApellido.value === ""){
        let divError = document.querySelector("#errorApellido")
        divError.textContent = "El campo no debe quedar vacio"
        divError.classList.add("error")
        inputApellido.classList.add("cuadroError")

        validacion = false;
    }
    else if(inputApellido.value.length < 3 || inputApellido.value.length > 12){    
        let divError = document.querySelector("#errorApellido")
        divError.textContent = "El campo debe tener minimo 3 caracteres y maximo 12"
        divError.classList.add("error")
        inputApellido.classList.add("cuadroError")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorApellido")
        divError.classList.add("oculto")
        inputApellido.classList.add("cuadroBien")
    }

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
        inputEmail.classList.add("cuadroBien")
    }


    //GENERO
    let inputNacionalidad = document.querySelector("#genero")
    if(inputNacionalidad.value === "-- Seleccione su Genero --"){
        let divError = document.querySelector("#errorGenero")
        divError.textContent = "Debe seleccionar un genero"
        divError.classList.add("error")
        inputNacionalidad.classList.add("cuadGenError")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorGenero")
        divError.classList.add("oculto")
        inputNacionalidad.classList.add("cuadroBien")
    }

    //CHECKBOX
    let check = document.querySelector("#terminos").checked;
    if(check ==  false){
        let divError = document.querySelector("#errorTerminos")
        let div = document.querySelector(".div_check")
        divError.textContent = "Debe aceptar los terminos y condiciones"
        divError.classList.add("error")
        div.classList.add("checkbox_error")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorTerminos")
        divError.classList.add("oculto")
    }



    if(validacion){ //si esta todo ok, enviamos los datos

    formRegistro.submit();
    alert("Registrado correctamente"); 
    }
}

formRegistro.addEventListener("submit", validarDatos) //cuando hago se da el evento 'submit' se activa "validarDatos"