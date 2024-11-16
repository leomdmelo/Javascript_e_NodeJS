const saudacao = function(nome) {
    return 'Olá ' + nome + '!';
};

const saudacaoArrow = (nome) => 'Olá ' + nome + '!';

console.log(saudacaoArrow('Leo'));  // Olá Leo!

/**
 * Uma função anônima não tem nome, enquanto a arrow function tem uma sintaxe mais curta.
 */