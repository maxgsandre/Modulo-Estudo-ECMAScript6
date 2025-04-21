console.log("Exemplo 1: Filtrando números maiores ou iguais a 10");

const numeros = [5, 10, 15, 3, 20];
const maioresOuIguaisA10 = numeros.filter(function(numero) {
  return numero >= 10;
});

console.log("Original:", numeros);
console.log("Filtrados:", maioresOuIguaisA10);

/*
Explicação:
O filter percorre cada item e só inclui no novo array se a condição for verdadeira.
Aqui, ele filtra apenas os números maiores ou iguais a 10.
*/

// -----------------------------------------

console.log("\nExemplo 2: Filtrando produtos em promoção");

const produtos = [
  { nome: "Notebook", preco: 2500, promocao: false },
  { nome: "Teclado", preco: 120, promocao: true },
  { nome: "Cadeira", preco: 750, promocao: true }
];

const emPromocao = produtos.filter(function(produto) {
  return produto.promocao === true;
});

console.log("Produtos em promoção:", emPromocao);

/*
Explicação:
O filter percorre o array de objetos e retorna apenas os que estão com a flag 'promocao' ativa.
*/

// -----------------------------------------

console.log("\nExemplo 3: Filtrando palavras com mais de 5 letras");

const palavras = ["casa", "bicicleta", "sol", "javascript", "lua"];

const longas = palavras.filter(function(palavra) {
  return palavra.length > 5;
});

console.log("Palavras longas:", longas);

/*
Explicação:
Aqui usamos filter para selecionar palavras com mais de 5 letras.
*/

// -----------------------------------------

console.log("\nExemplo 4: Filtrando usuários ativos");

const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carla", ativo: true }
];

const ativos = usuarios.filter(function(usuario) {
  return usuario.ativo;
});

console.log("Usuários ativos:", ativos);

/*
Explicação:
Apenas usuários com a propriedade 'ativo: true' são retornados.
*/

// -----------------------------------------

console.log("\nExemplo 5: Filtrando números pares");

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = listaNumeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log("Números pares:", pares);

/*
Explicação:
O filter aqui retorna apenas os números divisíveis por 2.
Uma forma prática de filtrar números pares de uma lista.
*/
