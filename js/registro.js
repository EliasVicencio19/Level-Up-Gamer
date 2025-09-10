function validarFormulario() {
  let errores = [];

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let edad = parseInt(document.getElementById("edad").value);
  let clave1 = document.getElementById("clave1").value;
  let clave2 = document.getElementById("clave2").value;

  // Validar nombre
  if (nombre === "") {
    errores.push("El nombre no puede estar vacío.");
  }

  // Validar correo
  if (!email.includes("@")) {
    errores.push("El correo electrónico no es válido.");
  }

  // Validar edad
  if (isNaN(edad) || edad <= 18) {
    errores.push("Debe tener 18 años o más");
  }

  // Validar contraseña
  if (clave1.length < 6) {
    errores.push("La contraseña debe tener al menos 6 caracteres.");
  }

  // Confirmar contraseña
  if (clave1 !== clave2) {
    errores.push("Las contraseñas no coinciden.");
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
