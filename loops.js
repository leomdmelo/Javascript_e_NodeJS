for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i < 5);
/**
 * Repetem blocos de código enquanto uma condição for verdadeira:
 *    •	for: laço com contagem.
 *    •	while: repete enquanto a condição for verdadeira.
 *    •	do while: executa o código ao menos uma vez, depois verifica a condição.
 */