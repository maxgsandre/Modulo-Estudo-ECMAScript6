console.log("Exemplo 1: Verificando se todos os números são positivos");

const numeros = [2, 4, 6, 8];

const todosPositivos = numeros.every(function(numero) {
  return numero > 0;
});

console.log("Todos os números são positivos?", todosPositivos);

/*
Explicação:
O método every verifica se TODOS os elementos satisfazem a condição.
Se todos forem maiores que zero, retorna true. Caso um só não seja, retorna false.
*/

// -----------------------------------------

console.log("\nExemplo 2: Verificando se todos os alunos foram aprovados");

const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "Bruno", nota: 8 },
  { nome: "Carla", nota: 5 }
];

const todosAprovados = alunos.every(function(aluno) {
  return aluno.nota >= 6;
});

console.log("Todos os alunos foram aprovados?", todosAprovados);

/*
Explicação:
Verifica se todos os alunos têm nota igual ou superior a 6.
Se um aluno reprovar, retorna false.
*/

// -----------------------------------------

console.log("\nExemplo 3: Verificando se todos os produtos estão em estoque");

const produtos = [
  { nome: "Teclado", estoque: true },
  { nome: "Mouse", estoque: true },
  { nome: "Monitor", estoque: false }
];

const todosDisponiveis = produtos.every(function(produto) {
  return produto.estoque === true;
});

console.log("Todos os produtos estão disponíveis?", todosDisponiveis);

/*
Explicação:
O every retorna true apenas se TODOS os produtos estiverem com a flag 'estoque: true'.
*/

// -----------------------------------------

console.log("\nExemplo 4: Validando senhas com tamanho mínimo");

const senhas = ["123456", "abc123", "senha123"];

const todasValidas = senhas.every(function(senha) {
  return senha.length >= 6;
});

console.log("Todas as senhas são válidas?", todasValidas);

/*
Explicação:
Usamos every para validar se todas as senhas possuem no mínimo 6 caracteres.
*/

// -----------------------------------------

console.log("\nExemplo 5: Verificando se todos os números são pares");

const lista = [2, 4, 6, 8, 9];

const todosPares = lista.every(function(numero) {
  return numero % 2 === 0;
});

console.log("Todos os números são pares?", todosPares);

/*
Explicação:
O every verifica se todos os números da lista são pares.
Como o 9 é ímpar, o resultado final será false.
*/
