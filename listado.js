verListado();


function verListado() {

    //tabla

    let matricula = JSON.parse(localStorage.getItem("Matrícula")) || [];
    let nombreape = JSON.parse(localStorage.getItem("Nombre y Apellido")) || [];
    let materia = JSON.parse(localStorage.getItem("Materia")) || [];
    let ciclo = JSON.parse(localStorage.getItem("Ciclo Lectivo")) || [];
    let nota1 = JSON.parse(localStorage.getItem("Nota Parcial 1")) || [];
    let nota2 = JSON.parse(localStorage.getItem("Nota Parcial 2")) || [];
    let notaprac = JSON.parse(localStorage.getItem("Nota Práctico")) || [];

    for (let i = 0; i < matricula.length; i++) {

        let m = matricula[i];
        let nA = nombreape[i];
        let mat = materia[i];
        let c = ciclo[i];
        let n1 = nota1[i];
        let n2 = nota2[i];
        let nP = notaprac[i];

        const td0 = document.createElement("td");
        td0.innerHTML = m;
  
        const td1 = document.createElement("td");
        td1.innerHTML = nA;

        const td2 = document.createElement("td");
        td2.innerHTML = mat;

        const td3 = document.createElement("td");
        td3.innerHTML = c;

        const td4 = document.createElement("td");
        td4.innerHTML = n1;

        const td5 = document.createElement("td");
        td5.innerHTML = n2;

        const td6 = document.createElement("td");
        td6.innerHTML = nP;

        const tr = document.createElement("tr");
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        const tbody = document.querySelector("tbody");
        tbody.appendChild(tr);

    }

}

function limpiar()
{
    localStorage.removeItem("Matrícula");
    localStorage.removeItem("Nombre y Apellido");
    localStorage.removeItem("Materia");
    localStorage.removeItem("Ciclo Lectivo");
    localStorage.removeItem("Nota Parcial 1");
    localStorage.removeItem("Nota Parcial 2");
    localStorage.removeItem("Nota Práctico");  

    const tbody = document.querySelector("tbody");
    tbody.innerHTML= "";
    
}
