let idade = 18;
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

let cor = 'vermelho';
switch(cor) {
    case 'azul':
        console.log('A cor é azul');
        break;
    case 'vermelho':
        console.log('A cor é vermelho');
        break;
    default:
        console.log('Cor desconhecida');
}
/**
 * As condicionais permitem tomar decisões no código:
 *     •	if: executa um bloco se a condição for verdadeira.
 *     •	else: executa se a condição if for falsa.
 *     •	else if: verifica outra condição se o if for falso.
 *     •	switch: alternativa ao if para múltiplas condições.
 */