console.log("Exemplo 1: Verificando se há algum número negativo");

const numeros = [10, 20, -5, 30];

const temNegativo = numeros.some(function(numero) {
  return numero < 0;
});

console.log("Tem número negativo?", temNegativo);

/*
Explicação:
O método some verifica se PELO MENOS UM item atende à condição.
Retorna true ao encontrar o primeiro número negativo.
*/

// -----------------------------------------

console.log("\nExemplo 2: Verificando se há produtos fora de estoque");

const produtos = [
  { nome: "Notebook", estoque: true },
  { nome: "Teclado", estoque: true },
  { nome: "Monitor", estoque: false }
];

const temIndisponivel = produtos.some(function(produto) {
  return produto.estoque === false;
});

console.log("Algum produto está fora de estoque?", temIndisponivel);

/*
Explicação:
some retorna true assim que encontrar um produto com estoque falso.
*/

// -----------------------------------------

console.log("\nExemplo 3: Verificando se há senhas muito curtas");

const senhas = ["123456", "abc", "senha123"];

const temCurta = senhas.some(function(senha) {
  return senha.length < 6;
});

console.log("Alguma senha é muito curta?", temCurta);

/*
Explicação:
Se pelo menos uma senha tiver menos que 6 caracteres, o resultado é true.
*/

// -----------------------------------------

console.log("\nExemplo 4: Verificando se há número ímpar na lista");

const lista = [2, 4, 6, 8, 9];

const temImpar = lista.some(function(numero) {
  return numero % 2 !== 0;
});

console.log("Tem número ímpar?", temImpar);

/*
Explicação:
some verifica se ao menos um número não é divisível por 2.
Retorna true no primeiro número ímpar encontrado.
*/

// -----------------------------------------

console.log("\nExemplo 5: Verificando se há emails inválidos");

const emails = ["joao@email.com", "maria@gmail.com", "lucas#hotmail.com"];

const temInvalido = emails.some(function(email) {
  return !email.includes("@");
});

console.log("Tem email inválido?", temInvalido);

/*
Explicação:
Verifica se algum e-mail da lista não contém "@", o que indica um formato inválido.
*/
