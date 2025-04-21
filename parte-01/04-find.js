console.log("Exemplo 1: Encontrando um número específico");

const numeros = [10, 20, 30, 40, 50];

const encontrado = numeros.find(function(numero) {
  return numero === 30;
});

console.log("Número encontrado:", encontrado);

/*
Explicação:
O método find retorna o PRIMEIRO item que satisfaz a condição.
Neste caso, procura o número 30 dentro do array.
Se não encontrar, retorna undefined.
*/

// -----------------------------------------

console.log("\nExemplo 2: Encontrando um produto com preço acima de 1000");

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Teclado", preco: 200 }
];

const produtoCaro = produtos.find(function(produto) {
  return produto.preco > 1000;
});

console.log("Produto caro encontrado:", produtoCaro);

/*
Explicação:
O find percorre o array de objetos e retorna o primeiro que satisfaz a condição.
Neste caso, o primeiro produto com preço acima de 1000.
*/

// -----------------------------------------

console.log("\nExemplo 3: Encontrando um aluno pelo nome");

const alunos = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 18 },
  { nome: "Carla", idade: 19 }
];

const alunoBuscado = alunos.find(function(aluno) {
  return aluno.nome === "Bruno";
});

console.log("Aluno encontrado:", alunoBuscado);

/*
Explicação:
Busca por um aluno com nome específico.
O find retorna o primeiro aluno com nome igual ao valor buscado.
*/

// -----------------------------------------

console.log("\nExemplo 4: Procurando usuário ativo");

const usuarios = [
  { nome: "Lucas", ativo: false },
  { nome: "Lívia", ativo: true },
  { nome: "Pedro", ativo: true }
];

const usuarioAtivo = usuarios.find(function(usuario) {
  return usuario.ativo;
});

console.log("Usuário ativo encontrado:", usuarioAtivo);

/*
Explicação:
O find retorna o primeiro usuário com a flag 'ativo' igual a true.
Se nenhum usuário for ativo, o retorno seria undefined.
*/

// -----------------------------------------

console.log("\nExemplo 5: Procurando produto inexistente");

const lista = [
  { nome: "Caderno" },
  { nome: "Caneta" },
  { nome: "Borracha" }
];

const busca = lista.find(function(item) {
  return item.nome === "Lápis";
});

console.log("Resultado da busca:", busca);

/*
Explicação:
Neste caso, nenhum item atende à condição.
O resultado é undefined, pois o find não encontrou correspondência.
*/
