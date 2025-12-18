const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

// Detectar si estamos en dashboard
const isDashboard = window.location.pathname.includes("dashboard.html");

// LOGIN
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const error = document.getElementById("error");

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("adminAuth", "true");
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Usuario o contraseña incorrectos";
  }
}

// PROTEGER DASHBOARD
if (isDashboard) {
  if (localStorage.getItem("adminAuth") !== "true") {
    window.location.href = "login.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("adminAuth");
  window.location.href = "login.html";
}
