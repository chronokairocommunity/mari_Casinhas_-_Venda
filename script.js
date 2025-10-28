// Funcionalidades do Site de Casinhas

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de hover nos cards de produtos
const produtoCards = document.querySelectorAll('.produto-card');
produtoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Funcionalidade do botão "Comprar Agora"
const botoesComprar = document.querySelectorAll('.btn-comprar');
botoesComprar.forEach(botao => {
    botao.addEventListener('click', function(e) {
        e.preventDefault();
        const nomeProduto = this.closest('.produto-card').querySelector('h3').textContent;
        const preco = this.closest('.produto-card').querySelector('.preco').textContent;
        
        alert(`Produto adicionado ao carrinho!\n\n${nomeProduto}\n${preco}\n\nObrigado por sua compra!`);
    });
});

// Funcionalidade do formulário de contato
const formularioContato = document.querySelector('.formulario-contato');
if (formularioContato) {
    formularioContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensagem = this.querySelector('textarea').value;
        
        // Validação simples
        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Simulação de envio
        alert(`Obrigado, ${nome}!\n\nSua mensagem foi enviada com sucesso.\nEntraremos em contato em breve através do email: ${email}`);
        
        // Limpar formulário
        this.reset();
    });
}

// Animação de entrada dos elementos ao carregar a página
window.addEventListener('load', function() {
    const elementos = document.querySelectorAll('.produto-card, .contato-info, .sobre-texto');
    
    elementos.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            elemento.style.transition = 'all 0.6s ease';
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Efeito parallax simples na hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// Contador de visitas (simulado)
function inicializarContador() {
    let visitas = localStorage.getItem('visitas-casinhas');
    
    if (!visitas) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    
    localStorage.setItem('visitas-casinhas', visitas);
    console.log(`Você visitou este site ${visitas} vez(es)`);
}

inicializarContador();

// Função para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Adicionar validação em tempo real ao email
const inputEmail = document.querySelector('input[type="email"]');
if (inputEmail) {
    inputEmail.addEventListener('blur', function() {
        if (this.value && !validarEmail(this.value)) {
            this.style.borderColor = 'red';
            this.style.backgroundColor = '#ffe6e6';
        } else {
            this.style.borderColor = '';
            this.style.backgroundColor = '';
        }
    });
}

// Efeito de scroll na navbar
let ultimaPosicao = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const posicaoAtual = window.pageYOffset;
    
    if (posicaoAtual > ultimaPosicao) {
        // Scrollando para baixo
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrollando para cima
        navbar.style.transform = 'translateY(0)';
    }
    
    ultimaPosicao = posicaoAtual;
});

navbar.style.transition = 'transform 0.3s ease';

// Log de informações do site
console.log('%c🏠 Bem-vindo ao site Casinhas à Venda!', 'color: #8B4513; font-size: 16px; font-weight: bold;');
console.log('%cEste é um site fictício criado para fins educacionais.', 'color: #666; font-size: 12px;');

