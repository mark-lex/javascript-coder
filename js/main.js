//? PRE ENTREGA 1
//! LOGIN---------------------------------------------*
let username;
let password;
let passLenght;

while(!username || !password || !passLenght > 14){
    username = prompt("Ingresa un nombre de usuario: ");
    password = prompt("Ingresa una contraseña: ");

    passLenght=password.length;

    if (!username) {
        alert("Debes ingresar un nombre de usuario: ");
    } else if (!password){
        alert("Debes ingresar una contraseña: ");
    } else if (passLenght > 14){
        alert("La contraseña no puede tener más de 14 caracteres")
    }
}

console.log("Tu nombre de usuario es: " + username + "\n" + "Y tu contraseña es: "+ password);

//! COMPRAR PRODUCTO----------------------------------*
//LISTA DE PRODUCTOS
function listProducts() {
    let products = {
        Joggers: 35,
        Polos: 25,
        Vinchas: 5,
        Peinetas: 7,
        Medias: 10,
        Toallas: 18,
        Camisas: 25,
    };
    return products;
}

//MOSTRAR LISTA
function showProducts() {
    let products = listProducts();
    let message = "Estos son nuestros productos en stock:\n";
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

console.log(`El IGV calculado es: ${igvCalculado.toFixed(2)}`);
console.log(`El subtotal es: ${subtotal.toFixed(2)}`);