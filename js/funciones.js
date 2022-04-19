//Api
const URL_breeds = "https://dog.ceo/api/breeds/list"
fetch(URL_breeds)
    .then ( (res) => res.json())
    .then ( (data) => {
    let mensaje = data.message
    console.log(mensaje);
    let select = document.getElementById("raza"); //Seleccionamos el select
    
    mensaje.forEach(element => {
        const option = document.createElement("option")
        option.innerHTML = element
        select.appendChild(option)
    });
})

const boton = document.getElementById("boton")
// AGREGAR MASCOTAS
boton.addEventListener("click", function(e) {

    function Mascotas(nombre, raza, dueño, peso) {
        this.nombre = nombre
        this.raza = raza
        this.dueño = dueño
        this.peso = peso

    }
    let capturadorasnombre = document.getElementById("nombre").value;
    if (capturadorasnombre.length == "") {
        swal("Error", "No colocaste ningún nombre", "error");
        return
    }
    let capturarraza = document.getElementById("raza").value;
    let capturardueño = document.getElementById("dueño").value;
    let capturarpeso = document.getElementById("fecha").value;
    nuevaMascota = new Mascotas(capturadorasnombre, capturarraza, capturardueño, capturarpeso)
    console.log("estas aqui");
    paraEmpezar()
})
// ARRAY
const nombresMascotas = [
    {nombre: "", raza: "", dueño: "", peso: ""},

]
// FUNCIONES
function cargar(array) {
    var select = document.getElementById("razas"); //Seleccionamos el select
    
    for(var i=0; i < array.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = array[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
function agregarMascota(){
    almacenados.push(nuevaMascota)
    document.getElementById("table").innerHTML += `<tbody><td>${nuevaMascota.nombre}</td><td>${nuevaMascota.raza}</td><td>${nuevaMascota.dueño}</td><td>${nuevaMascota.peso}</td></tbody>`
    const nuevo = JSON.stringify(almacenados)
    localStorage.setItem("baul", nuevo)
}
function paraEmpezar() {
    Toastify({
        text: "Agregaste un Cliente Nuevo",
        duration: 3000,
        style: {
            background: "linear-gradient(to top, rgb(2, 110, 110), rgb(189, 248, 248))",
            color: "black",
          }
        }).showToast()
    if(localStorage.getItem("baul") === null){
        const inicioStorage = JSON.stringify(nombresMascotas)
        localStorage.setItem("baul", inicioStorage)
    }
    else{
        agregarMascota()
    }    
    
}
//BUSCAR MASCOTA EN EL ARRAY  
const boton2 = document.getElementById("boton2")  
boton2.addEventListener("click",function(e){
    e.preventDefault
    let porNombre = document.getElementById("buscarnombre").value;
    porNombre.toLowerCase()
    buscarpeso = almacenados.filter(e => e.nombre == porNombre)
    console.log(buscarpeso);
    buscarpeso.forEach(element => {
        document.getElementById("table2").innerHTML += `<tbody><td>${element.nombre}</td><td>${element.raza}</td><td>${element.dueño}</td><td>${element.peso}</td></tbody>`
    });
    

    
})

//TABLA
const almacenados = JSON.parse(localStorage.getItem("baul"))
almacenados.forEach(element => {
    if(element.nombre != ""){
    document.getElementById("table").innerHTML += `<tbody><td>${element.nombre}</td><td>${element.raza}</td><td>${element.dueño}</td><td>${element.peso}</td></tbody>`
    }    
    })

console.table(almacenados)
window.addEventListener("scroll", function () {
    let header = document.getElementById("head")
    header.classList.toggle("down",window.scrollY>0)
    
})