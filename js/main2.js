/* //Get All Value
let boton = document.getElementById('crearUsuario');
let botonR = document.getElementById('cancelar');
let form1 = document.getElementById('form1');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let DNI = document.getElementById('dni');
    let fechaNac = document.getElementById('Fecha');
    let edad = document.getElementById('edad')

    //Set Value
    nombre.value = '';
    apellido.value = '';
    DNI.value = '';
    fechaNac.value = '';
    edad.value = '';

});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let DNI = document.getElementById('dni');
    let fechaNac = document.getElementById('Fecha');
    let edad = document.getElementById('edad')

    //Set Value And LocalStorage
    
    nombre = nombre.value;
    localStorage.setItem('nombre', nombre);

    apellido = apellido.value;
    localStorage.setItem('apellido', apellido);

    DNI = DNI.value;
    localStorage.setItem('dni', DNI);

    fechaNac = fechaNac.value;
    localStorage.setItem('Fecha', fechaNac);

    edad = edad.value;
    localStorage.setItem('edad', edad);

});
 */

document.addEventListener('DOMContentLoaded', function () {
    // Recuperar datos almacenados en LocalStorage al cargar la página
    cargarDatosGuardados();

    // Agregar evento de envío al formulario
    document.getElementById('miFormulario').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        // Obtener el valor del campo de texto
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var DNI = document.getElementById('dni').value;
        var fechaNac = document.getElementById('Fecha').value;
        var edad = document.getElementById('edad').value; 

        // Validar y guardar en LocalStorage
        if (nombre) {
            localStorage.setItem('nombre', nombre);
            alert('Nombre guardado exitosamente');
        } else {
            alert('Por favor, ingresa un nombre antes de guardar.');
        }
        if (apellido) {
            localStorage.setItem('apellido', apellido);
            alert('Apellido guardado exitosamente');
        } else {
            alert('Por favor, ingresa un apellido antes de guardar.');
        }
        if (DNI) {
            localStorage.setItem('dni',DNI);
            alert('DNI guardado exitosamente');
        } else {
            alert('Por favor, ingresa su DNI antes de guardar.');
        }
        if (fechaNac) {
            localStorage.setItem('Fecha',fechaNac);
            alert('Fecha de Nacimiento  guardada exitosamente');
        } else {
            alert('Por favor, ingresa su Fecha de nacimiento antes de guardar.');
        }
        if (edad) {
            localStorage.setItem('edad',edad);
            alert('edad guardada exitosamente');
        } else {
            alert('Por favor, ingresa su edad antes de guardar.');
        }

    });
});

function cargarDatosGuardados() {
    // Obtener los datos del LocalStorage
    var nombreGuardado = localStorage.getItem('nombre');
    var apellidoGuardado = localStorage.getItem('apellido');
    var DNIguardado = localStorage.getItem('dni');
    var fechaNacGuardado = localStorage.getItem('Fecha');
    var edadGuardado = localStorage.getItem('edad');

    // Si hay datos guardados, mostrarlos en el campo de texto
    if (nombreGuardado) {
        document.getElementById('nombre').value = nombreGuardado;
    }
    if (apellidoGuardado) {
        document.getElementById('apellido').value = apellidoGuardado;
    }
    if (DNIguardado) {
        document.getElementById('dni').value = DNIguardado;
    }
    if (fechaNacGuardado) {
        document.getElementById('Fecha').value = fechaNacGuardado;
    }
    if (edadGuardado) {
        document.getElementById('edad').value = edadGuardado;
    }
}

function guardarEnLocalStorage(nombre) {
    // Guardar en LocalStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('dni', DNI);
    localStorage.setItem('Fecha', fechaNac);
    localStorage.setItem('edad', edad);

    // Opcional: Puedes mostrar un mensaje o realizar otras acciones después de guardar
    // alert('Nombre guardado exitosamente');
}


