console.log("Exemplo 1: Somando os valores de um array");

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log("Soma total:", soma);

/*
Explicação:
reduce recebe dois parâmetros principais:
1. Uma função de callback com acumulador e valor atual
2. Um valor inicial para o acumulador (neste caso, 0)

A função percorre o array somando cada número ao acumulador.
*/

// -----------------------------------------

console.log("\nExemplo 2: Multiplicando todos os valores");

const valores = [1, 2, 3, 4];

const produto = valores.reduce(function(total, valor) {
  return total * valor;
}, 1);

console.log("Produto final:", produto);

/*
Explicação:
O reduce pode ser usado para qualquer tipo de operação acumulada.
Neste exemplo, multiplicamos os valores do array entre si.
*/

// -----------------------------------------

console.log("\nExemplo 3: Concatenando strings");

const palavras = ["Olá", "mundo", "do", "JavaScript"];

const frase = palavras.reduce(function(texto, palavra) {
  return texto + " " + palavra;
});

console.log("Frase:", frase);

/*
Explicação:
Usamos reduce para juntar todas as palavras em uma única string.
Sem valor inicial, o reduce começa com o primeiro item como base.
*/

// -----------------------------------------

console.log("\nExemplo 4: Contando quantos produtos estão em estoque");

const produtos = [
  { nome: "Notebook", estoque: true },
  { nome: "Mouse", estoque: false },
  { nome: "Monitor", estoque: true }
];

const quantidade = produtos.reduce(function(total, produto) {
  return produto.estoque ? total + 1 : total;
}, 0);

console.log("Quantidade em estoque:", quantidade);

/*
Explicação:
Para cada produto, se ele estiver em estoque (true), adiciona 1 ao total.
É uma forma de usar reduce como contador condicional.
*/

// -----------------------------------------

console.log("\nExemplo 5: Agrupando nomes em um array");

const alunos = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 18 },
  { nome: "Carla", idade: 19 }
];

const nomes = alunos.reduce(function(lista, aluno) {
  lista.push(aluno.nome);
  return lista;
}, []);

console.log("Nomes dos alunos:", nomes);

/*
Explicação:
Aqui o reduce começa com um array vazio e vai adicionando os nomes.
É uma forma de transformar um array de objetos em um array de strings.
*/
