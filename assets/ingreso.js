let tipoSelect;
function configurarFormulario(tipoSelectId, usuarioFormId, veterinarioFormId) {
  tipoSelect = document.getElementById(tipoSelectId);
  const formUsuario = document.getElementById(usuarioFormId);
  const formVet = document.getElementById(veterinarioFormId);

  if (!tipoSelect || !formUsuario || !formVet) {
    console.error("Error: uno o más IDs no existen en el documento.");
    return;
  }

  tipoSelect.addEventListener('change', () => {
    switch (tipoSelect.value) {
      case 'usuario':
        formUsuario.classList.remove('hidden');
        formVet.classList.add('hidden');
        break;
      case 'veterinario':
        formVet.classList.remove('hidden');
        formUsuario.classList.add('hidden');
        break;
      default:
        formUsuario.classList.add('hidden');
        formVet.classList.add('hidden');
    }
  });  
}

async function loginGenerico({ url, redirect, inicioId, passId }) {

    const inicio = document.getElementById(inicioId).value;
    const pass   = document.getElementById(passId).value;

    const datos = { inicio, contrasena: pass };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Error en la autenticación");
            return;
        }

        if (data.message) {
            alert(data.message);
            return;
        }

        // Si todo salió bien
        window.location.href = redirect;

    } catch (error) {
        console.error(error);
        alert("No se pudo conectar con el servidor.");
    }
}



const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tipo = tipoSelect.value;

    if (tipo === "usuario") {
        loginGenerico({
            url: "https://hacetecargo.site/api/user/login",
            redirect: "indexusuario.html",
            inicioId: "inicioUsuario",
            passId: "passUsuario"
        });

    } else if (tipo === "veterinario") {
        loginGenerico({
            url: "https://hacetecargo.site/api/vet/login",
            redirect: "indexvet.html",
            inicioId: "inicioVeterinario",
            passId: "passVeterinario"
        });

    } else {
        alert("Selecciona Usuario o Veterinario.");
    }
});

