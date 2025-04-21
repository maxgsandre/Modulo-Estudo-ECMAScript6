console.log("Exemplo 1: Dobrando números com map");

const numeros = [1, 2, 3];
const dobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log("Original:", numeros);  // [1, 2, 3]
console.log("Dobrados:", dobrados); // [2, 4, 6]

/*
Explicação:
O método map cria um NOVO array com base no resultado da função.
Aqui, cada número foi multiplicado por 2.
O array original não é alterado.
*/

// -----------------------------------------

console.log("\nExemplo 2: Extraindo nomes de objetos");

const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Pedro" }
];

const nomes = usuarios.map(function(usuario) {
  return usuario.nome;
});

console.log("Nomes:", nomes); // ["João", "Maria", "Pedro"]

/*
Explicação:
O map percorre cada objeto da lista e retorna apenas o nome.
Gera um novo array com os nomes extraídos.
*/

// -----------------------------------------

console.log("\nExemplo 3: Convertendo temperaturas Celsius para Fahrenheit");

const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(function(temp) {
  return (temp * 9) / 5 + 32;
});

console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

/*
Explicação:
Usamos map para converter cada temperatura de Celsius para Fahrenheit.
A fórmula aplicada foi (C * 9/5) + 32.
*/

// -----------------------------------------

console.log("\nExemplo 4: Adicionando rótulos a produtos");

const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 80 }
];

const rotulados = produtos.map(function(produto) {
  return {
    ...produto,
    etiqueta: `Produto: ${produto.nome} | Preço: R$ ${produto.preco}`
  };
});

console.log("Produtos rotulados:", rotulados);

/*
Explicação:
Criamos um novo array onde cada objeto tem uma nova propriedade chamada "etiqueta".
Usamos o spread operator (...) para manter os dados originais e adicionar novos.
*/

// -----------------------------------------

console.log("\nExemplo 5: Capitalizando nomes");

const nomesMinusculos = ["ana", "bruno", "carla"];

const nomesCapitalizados = nomesMinusculos.map(function(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1);
});

console.log("Capitalizados:", nomesCapitalizados);

/*
Explicação:
Transformamos a primeira letra em maiúscula usando charAt + toUpperCase.
Depois juntamos com o restante do nome usando slice.
*/
