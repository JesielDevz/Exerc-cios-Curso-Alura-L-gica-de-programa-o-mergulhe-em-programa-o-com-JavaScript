//Crie um programa de contagem regressiva. 
//Peça um número e conte deste número até 0,
//usando um loop while no console do navegador.

let contador = parseInt(prompt('Digite um número qualquer:'));

if (contador >= 0) {
    while (contador >= 0) {
        alert(contador);
        contador--;
    }
} else {
    while (contador <= 0) {
        alert(contador);
        contador++;
    }
}