//! PRE ENTREGA 1
//? LOGIN
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

alert("Te damos la bienvenida a nuestra tienda: " + username);

//? COMPRAR PRODUCTO
/* function listProducts () {

}

let products = prompt("Escoge un producto: ") ;

while(){

    if (products = "") {
        alert("El producto selecionado es: " + selectProduct)
    } else {
        alert("No seleccionaste ningún producto")
    }

} */


//? CALCULANDO IGV - SUBTOTAL DE PRODUCTO
/* function calcularIGV(price, igvPorcentaje) {
    const IGV = price * igvPorcentaje;
    return IGV;
}

const productPrice = Number(prompt("Ingrese el precio del producto: "));
const igvPorcentaje = 0.18; //En Perú, el IGV es del 18%

const igvCalculado = calcularIGV(productPrice, igvPorcentaje);
const subtotal = productPrice - igvCalculado;

console.log(`El IGV calculado es: ${igvCalculado.toFixed(2)}`);
console.log(`El subtotal es: ${subtotal.toFixed(2)}`); */

//!--------------------------------------------------------*
// TEST
/* function calcularIgv (productPrice)     {
    const IGV_PORCENTAJE = 0.18;
    const IGV = productPrice * IGV_PORCENTAJE;
    return IGV;
}

const price = 35;
const igvCalculado = calcularIgv (price);
console.log("El IGV del producto es: " + igvCalculado); */