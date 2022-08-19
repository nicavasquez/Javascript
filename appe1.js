console.log("Hola");
console.log("Este es el primer programa .js de Nica Vasquez");
console.log("El programa pide al usuario que introduzca un numero y devolvera todos los numeros por los que es divisible.");


let numero = Number(prompt("Introduce un número positivo: "));
let contador = 0;


while (numero <= 0) {
    console.log(`Has introducido ${numero} y no es valido.`);
    numero = Number(prompt("Por favor introduce otro numero: "));
}
for ( let i = 0; i <= numero; i++) {    
    if (numero % i==0) {
        console.log(`El numero ${numero} es divisible por ${i}`);
        
    } else {
        continue;
    };
    
}

console.log(`Ahora ya sabes por que numeros es divisible el numero ${numero}.`);