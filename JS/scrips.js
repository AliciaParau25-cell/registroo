document.addEventListener("DOMContentLoaded", function() {
    
    const formulario = document.getElementById('registro');
    const pass1 = document.getElementById('password1');
    const pass2 = document.getElementById('password2');

    // 1. Validación mientras el usuario escribe (Tiempo real)
    pass2.addEventListener('input', function() {
        if (pass1.value !== pass2.value) {
            pass2.setCustomValidity("Las contraseñas deben coincidir");
        } else {
            pass2.setCustomValidity(""); // Esto quita el error si ya son iguales
        }
    });

    // 2. Validación al intentar enviar (Doble seguridad)
    formulario.onsubmit = function(e) {
        if (pass1.value !== pass2.value) {
            e.preventDefault(); // Bloquea el envío
            alert("¡Las contraseñas no coinciden! Por favor, verifica.");
            pass2.value = "";
            pass2.focus();
            return false;
        }
        return true;
    };
});