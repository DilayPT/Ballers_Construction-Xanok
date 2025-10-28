
// Referencias a los formularios
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Registro de nuevo usuario
const registerForm = document.getElementById("registerForm");
const registerMsg = document.getElementById("registerMsg");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (!name || !email || !password) {
    registerMsg.textContent = "Por favor, completa todos los campos.";
    registerMsg.style.color = "red";
    return;
  }

  // Simulación de guardado de usuario en localStorage
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  registerMsg.textContent = "Registro exitoso. ¡Ahora inicia sesión!";
  registerMsg.style.color = "green";

  setTimeout(() => {
    container.classList.remove("right-panel-active");
  }, 1500);
});

// Inicio de sesión
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // Validacion Administrador
  if (email === "admin@ballers.com" && password === "ballers123") {
    loginMsg.textContent = "Bienvenido Administrador...";
    loginMsg.style.color = "green";
    // Guardamos el estado de sesión del admin (solo simulado)
    localStorage.setItem("adminLogged", "true");
    setTimeout(() => {
      window.location.href = "../Administrador/panelAdmin/admin.html";
    }, 1200);
    return;
  }
  // Validacion usuario normal
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    loginMsg.textContent = "Inicio de sesión exitoso.";
    loginMsg.style.color = "green";

    setTimeout(() => {
      window.location.href = "../Pageuserweb/Userweb.html"; 
    }, 1200);
  } else {
    loginMsg.textContent = "Correo o contraseña incorrectos.";
    loginMsg.style.color = "red";
  }
});
