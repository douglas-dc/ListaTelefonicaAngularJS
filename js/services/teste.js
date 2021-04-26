var criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

var Pessoa = criarPessoa("Douglas", 20);
console.log(Pessoa)