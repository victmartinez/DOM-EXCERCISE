


const boton = document.getElementById("btnInfo");
const container = document.getElementById("showInfo");

boton.addEventListener("click", () => {
//traer inf ingresada por usuario
//quiero imprimir informacion en pantalla
//crear una etiqueta p
// crear un node texto
// asignar padrea a elementos
// p es padre de node texto
// div vacio en html es padre de p
let texto = document.getElementById("info").value;

for (let i=0; i<texto.length; i++){
    console.log(texto[i]);
    let p = document.createElement("p");
    let pContent = document.createTextNode(texto[i]);
    p.appendChild(pContent);
    container.appendChild(p);
    // container.innerHTML += `<p> ${texto[i]} </p>`;
}



})

