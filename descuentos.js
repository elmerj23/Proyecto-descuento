//const precioOriginal=120;
//const descuento=18;
function calcularPrecioConDescuento(precio,descuento){
const porcentajePrecioConDescuento=100-descuento;
const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;

if(precioConDescuento){
return(`${precioConDescuento}`);

}
else {
return alert(`por favor:Ingrese un valorantes de calcular el descuento`);}
}

//console.log({precioOriginal,descuento,porcentajePrecioConDescuento,precioConDescuento,});

function onClickButtonPriceDiscount(){
const inputPrice=document.getElementById("inputPrice");
const inputDiscount=document.getElementById("inputDiscount");
const valuePrice=inputPrice.value;
const valueDiscount=inputDiscount.value;
const precioFinal=calcularPrecioConDescuento(valuePrice,valueDiscount)
const resultP=document.getElementById("resultP");
resultP.innerText="Tu precio con descuento es : $ "+precioFinal;
}

//cupones

function calcularPrecioConDescuentoCupon(precio,descuento,cupon){
const porcentajePrecioConDescuento=100-descuento;
const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
const porcentajeCupon=(precioConDescuento*cupon)/100;
const precioConDescuentoCupon=precioConDescuento-porcentajeCupon;

if (precioConDescuentoCupon){
return (`El precio con cupon incluido es $ ${precioConDescuentoCupon}`);}
else{(`por favor ingrese un cupon valido`);}
}
//ahorro
function calcularPrecioConDescuentoaHorro(precio,descuento,cupon){
const porcentajePrecioConDescuento=100-descuento;
const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
const porcentajeCupon=(precioConDescuento*cupon)/100;
const precioConDescuentoCupon=precioConDescuento-porcentajeCupon;
const precioConAhorro=precio-precioConDescuentoCupon;
return (` tu ahorro es de : $  ${precioConAhorro}`);}


const cupones=["granDescuento","medianoDescuento","pequeñoDescuento"];
//funcion

 
function onClickButtonPriceDiscountCupon(){
const inputPrice1=document.getElementById("inputPrice");
const inputDiscount1=document.getElementById("inputDiscount");
const inputCupon=document.getElementById("inputCupon")

const valuePrice1=inputPrice.value;
const valueDiscount1=inputDiscount.value;
const cuponValue=inputCupon.value;

let descuento;

if (!cupones.includes(cuponValue)) {
    alert("El cupón " + cuponValue +  " no es válido");
}
if (cuponValue==="granDescuento"){
descuento=50;
}
 else if(cuponValue==="medianoDescuento"){

descuento=25;
}
else if(cuponValue=== "pequeñoDescuento"){
descuento=10;
}




const precioConCupon=calcularPrecioConDescuentoCupon(valuePrice1,valueDiscount1,descuento)
const resultC=document.getElementById("resultC");
resultC.innerText=precioConCupon;

const totalAhorro=calcularPrecioConDescuentoaHorro(valuePrice1,valueDiscount1,descuento)
const reusltA=document.getElementById("reusltAhorro");
reusltA.innerText= totalAhorro;
const precioT=document.getElementById("precioT");
precioT.innerText= "$"+valuePrice1;
}




