let entier = document.getElementById('entier');
let flottant = document.getElementById('flottant');
let nonNumerique = document.getElementById('non-numerique');
let ran =  document.getElementById('random');
let truc = document.getElementById('trunc');
let remplace = document.getElementById('replace');
let myVariable = 10;
let result1 = parseInt(entier.innerHTML);

entier.innerHTML = result1 * myVariable;
flottant.innerHTML = parseFloat(flottant.innerHTML * myVariable + parseInt(entier.innerHTML));

if(isNaN(nonNumerique)) {
    nonNumerique.innerHTML = 0;
}

ran.innerHTML = Math.trunc(Math.random() * 100);
truc.innerHTML = Math.trunc(truc.innerHTML);
remplace.innerHTML = remplace.innerHTML.replace( 'world ', 'Samuel Coquelet');

console.log(random());