// ====================== BOTÓN "VOLVER AL INICIO" ======================
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================== FORMULARIO DE CONTACTO ======================
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success');

form.addEventListener('submit', (e) => {
    e.preventDefault();                    // Evita que recargue la página
    
    // Muestra mensaje de éxito (acción visible requerida)
    successMsg.style.display = 'block';
    
    // Limpia el formulario después de 3 segundos
    setTimeout(() => {
        form.reset();
        successMsg.style.display = 'none';
    }, 3000);
});