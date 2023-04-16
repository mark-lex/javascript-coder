//! PRE ENTREGA 1
//? CARRITO DE COMPRAS

let cart = " ";
let answer = prompt("¿Quieres agregar un producto al carrito? (Sí/No)");

if (answer.toLowerCase() === "sí") {
    let product = prompt("Ingresa el nombre del producto:");
    cart.push(product);
}

console.log("Carrito de compras:");
if (cart.length === 0) {
    console.log("El carrito está vacío");
} else {
    for (let i = 0; i < cart.length; i++) {
        console.log("- " + cart[i]);
    }
}
