
  const texto = document.getElementById('textoInfo');
  const btn = document.getElementById('toggleBtn');

  btn.addEventListener('click', () => {
    texto.classList.toggle('abierto');
    btn.textContent = texto.classList.contains('abierto')
      ? "Leer menos"
      : "Leer más";


     // Agregar o quitar clase al botón
  btn.classList.toggle('abierto', texto.classList.contains('abierto'));
});


const revealElements = document.querySelectorAll('.reveal');

console.log("Reveal elements encontrados:", revealElements.length); // <--- probar

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.25 });

revealElements.forEach(el => observer.observe(el));

