const prod = {
  nome: "Camisa Polo",
  preco: 79.9,
  tipo: {
    id: 10,
    nome: "Camisas",
  },
  retornarProduto() {
    return this.nome + " " + this.preco;
  },
};

const conta = {
  login: "Densatho",
  senha: "123",
  email: "123@123.com",
};

console.log(prod.retornarProduto());

//console.log(JSON.stringify(prod));
console.log(JSON.stringify(conta));
