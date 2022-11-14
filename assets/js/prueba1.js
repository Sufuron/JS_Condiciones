const inputUsuario = document.getElementById("inputUsuario");
const inputPassword = document.getElementById("inputPassword");
const btnVerificar = document.getElementById("btnVerificar");
const respuesta = document.getElementById("respuesta");

const DBUSER = "Fabian";
const DBPASS = "871626";

btnVerificar.addEventListener("click", () => {
  const userName = inputUsuario.value;
  const userPass = inputPassword.value;

  if (userName.trim().length === 0) {
    respuesta.textContent = "Escribe el nombre de usuario";
    return;
  }

  if (userPass.trim().length === 0) {
    respuesta.textContent = "Escribe la contraseña";
    return;
  }
  //validaciones //Para Credenciales
  if (userName.length < 5) {
    respuesta.textContent =
      "El usuario tiene que tener como minimo 6 caracteres";
    return;
  }

  if (userPass.length < 5) {
    respuesta.textContent =
      "La contraseña tiene que tener como minimo 6 caracteres";
    return;
  }

  if (
    userName.toUpperCase().trim() === DBUSER.toUpperCase() &&
    userPass === DBPASS
  ) {
    respuesta.textContent = "Login Exitoso";
  } else {
    respuesta.textContent = "Contraseña incorrecta";
  }
});
