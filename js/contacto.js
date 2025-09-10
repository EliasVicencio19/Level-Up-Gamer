function validarFormulario() {
  let errores = [];

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  // Validar nombre
  if (nombre === "") {
    errores.push("El nombre no puede estar vacío.");
  }

  // Validar correo
  if (!email.includes("@")) {
    errores.push("El correo electrónico no es válido.");
  }

  // Validar que mensaje no este vacio
  if (mensaje === "") {
    errores.push("Debe ingresar al menos 1 caracter.")
  }
  // Mostrar mensajes
  let mensajesDiv = document.getElementById("mensajes");
  mensajesDiv.innerHTML = "";

  if (errores.length > 0) {
    mensajesDiv.innerHTML = `<div class="alert alert-danger"><ul><li>${errores.join("</li><li>")}</li></ul></div>`;
  } else {
    mensajesDiv.innerHTML = `<div class="alert alert-success">✅ Registro exitoso</div>`;
  }
}
