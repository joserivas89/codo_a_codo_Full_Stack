const form=document.getElementById('form');
const nombre_apellido=document.getElementById('nombre_apellido');
const mail=document.getElementById('mail');
const consulta=document.getElementById('consulta');


form.addEventListener('submit', (e)=> {

    if (nombre_apellido.value==='' || nombre_apellido.value===null){
        alert('Por favor completar su nombre y apellido')

    }
    if (mail.value==='' || mail.value===null){
        alert('Por favor completar su direccion de email')

    }
    if (consulta.value==='' || consulta.value===null){
        alert('Por favor informe su consulta')

    }
});






