// Menú desplegable en pantallas pequeñas
const boton = document.getElementById('menu-btn');
const lista = document.getElementById('menu');
boton.addEventListener('click', () => {
  const abierto = lista.classList.toggle('abierto');
  boton.setAttribute('aria-expanded', abierto);
});
// Año actual en el pie de página
document.getElementById('anio').textContent = new Date().getFullYear();
// Validación básica del formulario de contacto (solo existe en contacto.html)
const form = document.getElementById('form-contacto');
if (form) {
  form.addEventListener('submit', (e) => {
    const estado = document.getElementById('estado');
    if (!form.checkValidity()) {
      e.preventDefault();
      estado.textContent = 'Completa todos los campos con un correo válido.';
    } else {
      estado.textContent = 'Abriendo tu programa de correo para enviar el mensaje.';
    }
  });
}
