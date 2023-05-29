// let matricula = [];
// let tipos = [];



let matricula = JSON.parse(localStorage.getItem("Matrícula")) || [];
let nombreape = JSON.parse(localStorage.getItem("Nombre y Apellido")) || [];
let materia = JSON.parse(localStorage.getItem("Materia")) || [];
let ciclo = JSON.parse(localStorage.getItem("Ciclo Lectivo")) || [];
let nota1 = JSON.parse(localStorage.getItem("Nota Parcial 1")) || [];
let nota2 = JSON.parse(localStorage.getItem("Nota Parcial 2")) || [];
let notaprac = JSON.parse(localStorage.getItem("Nota Práctico")) || [];


let m = matricula.length;

function agregar() {

    const txtmatricula = document.getElementById("txtmatricula");
    const txtnombreape = document.getElementById("txtnombreape");
    const txtmateria = document.getElementById("txtmateria");
    const txtciclo = document.getElementById("txtciclo");
    const txtnota1 = document.getElementById("txtnota1");
    const txtnota2 = document.getElementById("txtnota2");
    const txtnotaprac = document.getElementById("txtnotaprac");


    matricula[m] = parseInt(txtmatricula.value);
    nombreape[m] = txtnombreape.value;
    materia[m] = txtmateria.value;
    ciclo[m] = parseInt(txtciclo.value);
    nota1[m] = parseInt(txtnota1.value);
    nota2[m] = parseInt(txtnota2.value);
    notaprac[m] = parseInt(txtnotaprac.value);

    m++;


    localStorage.removeItem("Matrícula");
    localStorage.removeItem("Nombre y Apellido");
    localStorage.removeItem("Materia");
    localStorage.removeItem("Ciclo Lectivo");
    localStorage.removeItem("Nota Parcial 1");
    localStorage.removeItem("Nota Parcial 2");
    localStorage.removeItem("Nota Práctico");

    localStorage.setItem("Matrícula", JSON.stringify(matricula));
    localStorage.setItem("Nombre y Apellido", JSON.stringify(nombreape));
    localStorage.setItem("Materia", JSON.stringify(materia));
    localStorage.setItem("Ciclo Lectivo", JSON.stringify(ciclo));
    localStorage.setItem("Nota Parcial 1", JSON.stringify(nota1));
    localStorage.setItem("Nota Parcial 2", JSON.stringify(nota2));
    localStorage.setItem("Nota Práctico", JSON.stringify(notaprac));


    //fin tabla

    txtmatricula.value = ""
    txtnombreape.value = "";
    txtmateria.value = "";
    txtciclo.value = "";
    txtnota1.value = "";
    txtnota2.value = "";
    txtnotaprac.value = "";
    
}


