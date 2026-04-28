function iniciar() {
  registro = document.getElementById("registro");
  password1 = document.getElementById("password1");
  password2 = document.getElementById("password2");

  password1.addEventListener("input", validacion, false);
  password2.addEventListener("input", validacion, false);


  registro.addEventListener("input", validarEntrada, false);


  registro.addEventListener("invalid", accionInvalid, true);
}

function validacion() {
  if (password1.value !== password2.value) {
    password2.setCustomValidity("Las passwords deben coincidir");
  } else {
    password2.setCustomValidity("");
  }
}

function validarEntrada(evento) {
  var elemento = evento.target;

  if (elemento.validity.valid) {
    elemento.style.background = "transparent";
  } else {
    elemento.style.background = "yellow";
  }
}

function accionInvalid(evento) {
  var elemento = evento.target;
  elemento.style.background = "yellow";
}


window.addEventListener("load", iniciar, false);