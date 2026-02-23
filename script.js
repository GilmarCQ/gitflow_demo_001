document.getElementById('btnClick').addEventListener('click', function() {
   document.getElementById('output').textContent = '¡Botón clicado!';
});

//Este es un método
// Cambio en rama release v1.0.0
// hotfix v1.0.1
document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});