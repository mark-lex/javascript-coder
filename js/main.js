//? PRE ENTREGA 1
//! CARGA DATOS PARA REGISTRO -------------------------*
alert("Por favor, regístrate para comenzar a comprar.");

let username = "";
let password = "";

while (username === ""){
    username = prompt("Ingresa un nombre de usuario: ");
}

while (password === "" || password.length<8 || password.length>14){
    password = prompt("Ingresa una contraseña (entre 8 y 14 caracteres): ");
}

alert("Registro exitoso.\nTe damos la bienvenida a nuestra tienda " + username);

console.log("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";

//! REALIZANDO COMPRA DE LOS PRODUCTOS ----------------*
//LISTA DE PRODUCTOS
function listProducts() {
    let products = {
        joggers: 35,
        polos: 25,
        vinchas: 5,
        peinetas: 7,
        medias: 10,
        toallas: 18,
        camisas: 25,
    };
    return products;
}

//MOSTRAR LISTA
function showProducts() {
    let products = listProducts();
    let message = "Estos son nuestros productos en stock:\n\n";
    for (let product in products) {
        message += `${product}: S/ ${products[product]}\n`;
    }
    alert(message);
}

//COMPRAR PRODUCTOS
function buyProducts() {
    let products = listProducts();
    let total = 0;
    let keepBuy = true;
    
    while(keepBuy) {
        let product = prompt("Ingresa el producto que quieras comprar: ");
        if (product in products) {
            let quantity = Number(prompt(`Ingresa la cantidad de ${product} que quieras comprar:`));
            total += products[product] * quantity;
            keepBuy = confirm("¿Quieres seguir comprando?");
        } else {
            alert("Ese producto no está en la lista.");
        }
    }
    alert(`Total a pagar: S/ ${total}`);
    console.log(`Total a pagar: S/ ${total}`);
}

//EJECUTAR LISTA DE PRODUCTOS
showProducts();
//EJECUTAR COMPRA DE PRODUCTOS
buyProducts();

//! CALCULANDO IGV - SUBTOTAL DE PRODUCTO -------------*
function calcularIGV(price, igvPorcentaje) {
    const IGV = price * igvPorcentaje;
    return IGV;
}

const productPrice = Number(prompt("Ingrese el precio del producto a calcular el IGV: "));
const igvPorcentaje = 0.18; //En Perú, el IGV es del 18%

const igvCalculado = calcularIGV(productPrice, igvPorcentaje);
const subtotal = productPrice - igvCalculado;

alert(`El IGV calculado es: ${igvCalculado.toFixed(2)}`);
alert(`El subtotal es: ${subtotal.toFixed(2)}`);
console.log(`El IGV calculado es: ${igvCalculado.toFixed(2)}`);
console.log(`El subtotal es: ${subtotal.toFixed(2)}`);

alert ("Agredecemos tu preferencia. \nEsperamos verte de nuevo pronto.")
