const b = document.querySelector(".but");
let rotation = 0;
let intervaloPadrao = 500; // Intervalo padrão em milissegundos
let intervaloLento = 1000; // Intervalo lento em milissegundos

function troca() {
    // Remove todas as classes de rotação
    b.classList.remove("esquerda", "cima", "direita", "baixo");

    // Adiciona a classe correspondente à rotação atual
    switch (rotation) {
        case 0:
            b.classList.add("esquerda");
            break;
        case 90:
            b.classList.add("cima");
            break;
        case 180:
            b.classList.add("direita");
            break;
        case 270:
            b.classList.add("baixo");
            break;
        default:
            break;
    }

    // Atualiza a rotação para o próximo passo
    rotation += 90;
    if (rotation >= 360) {
        rotation = 0;
    }
}

let timer = setInterval(troca, intervaloPadrao);

// Event listener para o clique no botão
b.addEventListener("click", () => {
    // Remove todas as classes de rotação
    b.classList.remove("esquerda", "cima", "direita", "baixo");
    
    // Define o intervalo lento por 2 segundos
    clearInterval(timer);
    timer = setInterval(troca, intervaloLento);

    // Após 2 segundos, retorna ao intervalo padrão
    setTimeout(() => {
        clearInterval(timer);
        timer = setInterval(troca, intervaloPadrao);
    }, intervaloLento);
});
