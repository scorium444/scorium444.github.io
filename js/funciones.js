
// AGREGAR UNA MASCOTA NUEVA

function agregar(){

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
    agregarMascota()
}
//ARRAY 
const nombresMascotas = [
    {nombre: "Limon", raza: "Caniche", dueño: "Karen", peso: 6},
    {nombre: "Pelusa", raza: "Angora", dueño: "Stuart", peso: 4},
    {nombre: "Nube", raza: "Shitzu", dueño: "Marta", peso: 2},
    {nombre: "Asesino", raza: "Rotwailler", dueño: "ElBrian", peso: 55},
    {nombre: "Fatiga", raza: "Mestizo", dueño: "Pepe", peso: 22},
    {nombre: "Lazzie", raza: "Collie", dueño: "John", peso: 20},
]

    function agregarMascota(){
        nombresMascotas.push(nuevaMascota)
        document.getElementById("table").innerHTML += `<tbody><td>${nuevaMascota.nombre}</td><td>${nuevaMascota.raza}</td><td>${nuevaMascota.dueño}</td><td>${nuevaMascota.peso}</td></tbody>`
    }
//BUSCAR MASCOTA EN EL ARRAY    
function buscar() {
    let porNombre = document.getElementById("buscarnombre").value;
    buscarpeso = nombresMascotas.find(e => e.nombre == porNombre)
    document.getElementById("table2").innerHTML += `<tbody><td>${buscarpeso.nombre}</td><td>${buscarpeso.raza}</td><td>${buscarpeso.dueño}</td><td>${buscarpeso.peso}</td></tbody>`

    
}
const solonombres = nombresMascotas.map((el) => el.nombre)
console.log(`Buscar con estos nombres: ${solonombres}`);
