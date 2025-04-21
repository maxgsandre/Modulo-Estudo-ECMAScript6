console.log("Exemplo 1: Imprimindo nomes com forEach");

const nomes = ['maria', 'josé', 'joão'];
nomes.forEach(function(nome) {
  console.log("-" + nome);
});

/*
Explicação:
O método forEach percorre cada item do array.
Para cada nome da lista, a função passada é executada.
Neste caso, estamos apenas imprimindo o nome com um traço.
*/

// -----------------------------------------

console.log("\nExemplo 2: Usando função nomeada como callback");

function imprimeNome(nome) {
  console.log("> " + nome);
}

nomes.forEach(imprimeNome);

/*
Explicação:
Aqui criamos a função imprimeNome separadamente e passamos ela direto pro forEach.
É o mesmo resultado do exemplo anterior, mas com uma função reutilizável.
*/

// -----------------------------------------

console.log("\nExemplo 3: Adicionando itens durante a iteração");

const canais = ['Globo', 'Sbt', 'Record'];
canais.forEach(function(canal) {
  canais.push('RedeTV'); // não será incluído na iteração
  console.log("-" + canal);
});
console.log("Resultado final:", canais);

/*
Explicação:
O forEach define os itens que serão percorridos ANTES de começar a execução.
Então mesmo adicionando "RedeTV" durante o processo, ele não será processado.
*/

// -----------------------------------------

console.log("\nExemplo 4: Somando os preços de um carrinho");

const carrinho = [
  { produto: "Arroz", preco: 12.5 },
  { produto: "Feijão", preco: 8.2 },
  { produto: "Leite", preco: 4.7 }
];

let total = 0;
carrinho.forEach(function(item) {
  console.log(`Adicionando ${item.produto}: R$ ${item.preco}`);
  total += item.preco;
});
console.log("Total da compra: R$", total.toFixed(2));

/*
Explicação:
Com forEach, passamos item por item e somamos os preços.
Ótimo para acumuladores (embora reduce também sirva melhor pra isso).
*/

// -----------------------------------------

console.log("\nExemplo 5: Listando alunos aprovados");

const alunos = [
  { nome: "Ana", nota: 7.5 },
  { nome: "Bruno", nota: 4.8 },
  { nome: "Carla", nota: 6.2 }
];

alunos.forEach(function(aluno) {
  const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
  console.log(`${aluno.nome} - ${status}`);
});

/*
Explicação:
Percorremos cada aluno e, com base na nota, mostramos se foi aprovado ou não.
É uma forma rápida e legível de tratar listas com regras.
*/

// -----------------------------------------

console.log("\nExemplo 6: Contando quantas frutas começam com a letra 'm'");

const frutas = ['maçã', 'banana', 'mamão', 'abacaxi', 'melancia'];
let contador = 0;

frutas.forEach(function(fruta) {
  if (fruta[0].toLowerCase() === 'm') {
    contador++;
    console.log(`${fruta} começa com 'm'`);
  }
});
console.log(`Total de frutas que começam com 'm': ${contador}`);

/*
Explicação:
Usamos o forEach para contar elementos com base em uma condição.
Uma abordagem comum quando não se quer filtrar, apenas contar ou identificar.
*/
