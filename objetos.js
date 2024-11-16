let pessoa = {
    nome: 'Leo',
    idade: 25,
    profissao: 'Programador',
    saudacao: function() {
        return 'Olá ' + this.nome;
    },
    sua_idade: function() {
        return `sua idade é ${this.idade} anos!`; // outra forma de concatenar
    }
};

console.log(pessoa.nome);  // Leo
console.log(pessoa.saudacao());  // Olá Leo sua profissão é Programador sua idade é 25
console.log(pessoa.sua_idade()); // sua idade é 25 anos!

//Objetos são estruturas que armazenam pares de chave-valor. Você pode acessar e modificar suas propriedades.