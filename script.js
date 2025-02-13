// Função para criar o carrossel e gerenciar as transições
function criarCarrossel(carouselElement) {
    let indice = 0;  // Define o índice inicial para o carrossel

    // Função para exibir a imagem correta com base no índice
    function mostrarImagem() {
        const imagens = carouselElement.querySelector('.imagens');
        const totalImagens = imagens.children.length;

        if (indice >= totalImagens) {
            indice = 0;  // Volta para a primeira imagem se o índice for maior que o número total de imagens
        } else if (indice < 0) {
            indice = totalImagens - 1;  // Vai para a última imagem se o índice for menor que 0
        }

        // Muda a posição das imagens
        imagens.style.transform = `translateX(${-indice * 100}%)`;
    }

    // Função para mudar a imagem automaticamente
    function mudarImagemAuto() {
        indice++;  // Incrementa o índice
        mostrarImagem();  // Atualiza a imagem
    }

    // Função para mudar de imagem manualmente com os botões de navegação
    function mudarImagem(delta) {
       
        indice += delta;  // Atualiza o índice com base no delta (1 ou -1)
        mostrarImagem();  // Atualiza a imagem
    }

    // Adiciona eventos aos botões de navegação
    carouselElement.querySelector('.prev').addEventListener('click', () => mudarImagem(-1));
    carouselElement.querySelector('.next').addEventListener('click', () => mudarImagem(1));
}

// Função para inicializar todos os carrosséis na página
function inicializarCarrosseis() {
    const carrossels = document.querySelectorAll('.carrossel');
    
    carrossels.forEach(carrossel => criarCarrossel(carrossel));
}

// Aguarda o carregamento da página antes de inicializar os carrosséis
window.addEventListener('load', inicializarCarrosseis);







