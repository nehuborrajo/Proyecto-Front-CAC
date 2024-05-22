let resenia = document.querySelector("#resenia") //selecciono el form


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

    //NOTA
    let inputNota = document.querySelector("#notaUsuario")
    if(inputNota.value === ""){
        let divError = document.querySelector("#errorNota")
        divError.textContent = "Este campo no puede quedar vacio"
        divError.classList.add("error")
        inputNota.classList.add("cuadroError")

        validacion = false;
    }
    else if(inputNota.value < 0 || inputNota > 10){
        let divError = document.querySelector("#errorNota")
        divError.textContent = "Indique una nota valida entre 0 y 10"
        divError.classList.add("error")
        inputNota.classList.add("cuadroError")

        validacion = false;
    }
    else{
        let divError = document.querySelector("#errorNota")
        divError.classList.add("oculto")
        inputNota.classList.add("cuadroBien")
    }

    //OPINION
    let inputOpinion = document.querySelector("#opinionUsuario")
    if(inputOpinion.value === ""){
        let divError = document.querySelector("#errorOpinion")
        divError.textContent = "Este campo no puede quedar vacio"
        divError.classList.add("error")
        inputOpinion.classList.add("cuadroError")
    }
    else if(inputOpinion.value.length > 10){
        let divError = document.querySelector("#errorOpinion")
        divError.textContent = "Supero el maximo de 200 caracteres"
        divError.classList.add("error")
        inputOpinion.classList.add("cuadroError")
    }
    else{
        let divError = document.querySelector("#errorOpinion")
        divError.classList.add("oculto")
        inputOpinion.classList.add("cuadroBien")
    }



    if(validacion){ //si esta todo ok, enviamos los datos

    resenia.submit();
    alert("Reseña enviada correctamente");  
    }
}

resenia.addEventListener("submit", validarDatos) //cuando hago se da el evento 'submit' se activa "validarDatos"