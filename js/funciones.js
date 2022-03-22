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
    let capturarraza = document.getElementById("raza").value;
    let capturardueño = document.getElementById("dueño").value;
    let capturarpeso = document.getElementById("peso").value;
    nuevaMascota = new Mascotas(capturadorasnombre, capturarraza, capturardueño, capturarpeso)
    console.log("estas aqui");
    paraEmpezar()
})
// ARRAY
const nombresMascotas = [
    {nombre: "", raza: "", dueño: "", peso: ""},

]
// FUNCIONES
function agregarMascota(){
    almacenados.push(nuevaMascota)
    document.getElementById("table").innerHTML += `<tbody><td>${nuevaMascota.nombre}</td><td>${nuevaMascota.raza}</td><td>${nuevaMascota.dueño}</td><td>${nuevaMascota.peso}</td></tbody>`
    const nuevo = JSON.stringify(almacenados)
    localStorage.setItem("baul", nuevo)
}
function paraEmpezar() {
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
// si no tiene nombre no aparece
almacenados.forEach(element => {
    if(element.nombre != ""){
    document.getElementById("table").innerHTML += `<tbody><td>${element.nombre}</td><td>${element.raza}</td><td>${element.dueño}</td><td>${element.peso}</td></tbody>`
    }    
    })

console.table(almacenados)