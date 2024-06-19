const nome = prompt("Qual seu nome?");
const sobrenome = prompt("E seu sobrenome?");
const idade = prompt("Qual a sua idade?");
const anoAtual = 2024;

const nascimneto = anoAtual - parseFloat(idade);

console.log(`Seu nome é ${nome} ${sobrenome}, nasceu em ${nascimneto} `);
const num1 = prompt("escreva um numero:");
const num2 = prompt("escreva outro numero:");

const soma = parseFloat(num1) + parseFloat(num2);
const produto = parseFloat(num1) * parseFloat(num2);

console.log(`A soma dos números digitos é ${soma} e o produto é ${produto}`);
