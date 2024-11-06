function sideBar(){
    let sidebar = document.querySelector('.menu-bar');
    sidebar.style.display = 'block';
}
function closeMenu(){
    let closeMenu = document.querySelector('.menu-bar');
    closeMenu.style.display = 'none';
}
function closeMenu(){
    let menu = document.querySelector('.menu-bar');
    menu.classList.add('hide-element');

    menu.addEventListener('animationend', () => {
        menu.style.display = 'none';
        menu.classList.remove('hide-element');
    }, { once: true });
}

const imagem = document.getElementById('imagem');

        imagem.addEventListener('mouseover', function() {
            // Ao passar o mouse, não faz nada por enquanto
        });

        imagem.addEventListener('transitionend', function() {
            // Quando o efeito de hover terminar, adiciona a classe para animação
            imagem.classList.add('finalizado');
            
            // Remove a classe após a animação terminar para permitir repetição
            setTimeout(function() {
                imagem.classList.remove('finalizado');
            }, 1000); // O tempo do setTimeout deve ser igual ou maior que a duração da animação
        });