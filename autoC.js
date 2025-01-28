// Definimos los valores que se deben almacenar y asignar a los inputs para cada checkbox
let datos = {
    check1: {
        input1: "Valor para input 1 de opciones 1",  // Valor para el primer input de opciones 1
        input2: "Valor para input 2 de opciones 1",  // Valor para el segundo input de opciones 1
        input3: "Valor para input 3 de opciones 1"   // Valor para el tercer input de opciones 1
    },
    check2: {
        input1: "Valor para input 1 de opciones 2",  // Valor para el primer input de opciones 2
        input2: "Valor para input 2 de opciones 2",  // Valor para el segundo input de opciones 2
        input3: "Valor para input 3 de opciones 2"   // Valor para el tercer input de opciones 2
    }
};
// Ejemplo para acceder a los datos con notacion de punto (.)
// console.log(datos.check1.input1);  // Muestra "Valor para input 1 de opciones 1"



// Función que actualiza los inputs según el estado de los checkboxes
function actualizarInputs() {
    // Obtenemos el estado (marcado o desmarcado) del checkbox 1
    let check1 = document.getElementById("check1");

    // Obtenemos el estado (marcado o desmarcado) del checkbox 2
    let check2 = document.getElementById("check2");

    // Limpiamos los valores de los inputs antes de asignar nuevos valores
    document.getElementById("i1").value = "";
    document.getElementById("i2").value = "";
    document.getElementById("i3").value = "";

    // Si el checkbox 1 está marcado, asignamos los valores correspondientes a los inputs
    if (check1.checked) {
        document.getElementById("i1").value = datos.check1.input1;
        document.getElementById("i2").value = datos.check1.input2;
        document.getElementById("i3").value = datos.check1.input3;
    }

    // Si el checkbox 2 está marcado, asignamos los valores correspondientes a los inputs
    if (check2.checked) {
        document.getElementById("i1").value = datos.check2.input1;
        document.getElementById("i2").value = datos.check2.input2;
        document.getElementById("i3").value = datos.check2.input3;
    }
}
