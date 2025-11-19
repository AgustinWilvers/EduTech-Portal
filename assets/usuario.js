const imagen=document.getElementById("editSquare");
const div=document.getElementById("formulario");

function modificarUsuarios()
{
    if(div.style.display=="none")
    {
    div.style.display="block"
    }
    else
    {
        div.style.display="none"
    }
}

const iconos=document.querySelectorAll(".iconEdit");

function modificarInput()
{
    iconos.forEach(icono=>
    {
        icono.addEventListener("click", () => 
        {
        const input=icono.parentElement.querySelector("input");

             if (input)
                {
                    input.disabled=false;
                    input.focus();
                }
        });

    });
}

function guardarDatos()
{
    const respuesta = confirm("¿Estás seguro de esto?");
    if (respuesta) {
        alert("Acción confirmada ✅");
    } else {
        alert("Acción cancelada ❌");
    }
}