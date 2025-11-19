const passInput = document.getElementById('contrasena');
const togglePass = document.getElementById('togglePass');

togglePass.addEventListener('click', () => {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        // opcional: cambiar la imagen para indicar que está visible
        togglePass.src = 'Media_HaceteCargo\pass_notVisibility.svg';
    } else {
        passInput.type = 'password';
        togglePass.src = 'Media_HaceteCargo\pass_Visibility.svg';
    }
});

const form = document.getElementById('registro_Form');
let data;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contrasena').value;
    const telefono = document.getElementById('telefono').value;
    const genero = document.getElementById('genero').value;
    const DNI= document.getElementById("DNI").value;
    const email=document.getElementById("correo_Electronico").value;
    const nombre= document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const fecha_nacimiento=document.getElementById("fecha_nacimiento").value;
    const ciudad=document.getElementById("ciudad").value;
    const direccion=document.getElementById("direccion").value;
    
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const datos = {
        usuario:usuario,
        contrasena:contraseña,
        nombre:nombre,
        apellido:apellido,
        dni:DNI,
        domicilio:direccion,
        telefono:telefono,
        email:email,
        ciudad:ciudad,
        sexo:genero,
        fechaNacimiento:fecha_nacimiento,
        
    };


    // nombre_usuario, contrasena, nombre, apellido, dni, domicilio, telefono, email, ciudad, sexo, fecha_naci


    // Elegimos la API correcta
     let url = "";
        if (tipo === "usuario") {
            url = "https://hacetecargo.site/api/user/crear"; // coincide con tu ruta PHP
        } else {
            url = "https://hacetecargo.site/api/veterinario/crear"; // suponiendo que tengas otra ruta para veterinarios
    }
 try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        data = await res.json();

        if (!res.ok) {
            alert("Error: " + data.message);
            console.log("Datos enviados:", datos);

            return;
        }

        // ✔ Mostrar alert si la cuenta se creó bien
        alert("Cuenta creada correctamente como " + tipo);
        console.log("Datos enviados:", datos);


    } catch (error) {
        alert("No se pudo conectar con el servidor.");
    }

    
console.log("RESPUESTA API:", data);
alert(JSON.stringify(data));
});