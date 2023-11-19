// login.js

const userData = {
    username: "admin",
    password: "admin",
  };
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Verificamos si las credenciales son válidas
    if (username === userData.username && password === userData.password) {
      alert("Inicio de sesión exitoso.");
      window.location.href = "select_route.html"; 
    } else {
      alert("Error en el inicio de sesión. Verifica tus credenciales.");
    }
  });
  