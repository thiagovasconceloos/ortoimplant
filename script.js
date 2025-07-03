document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburguer para Responsividade
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Alterna o ícone do hamburger
        const icon = hamburger.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar o menu ao clicar em um link (para mobile)
    document.querySelectorAll('.nav-list li a').forEach(item => {
        item.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Carrossel de Depoimentos
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonialItems = document.querySelectorAll('.testimonial-item');

    let currentIndex = 0;

    // Função para mostrar um depoimento específico
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            // Calcula o deslocamento para centralizar o item atual
            const offset = -index * (item.offsetWidth + 20); // 20px é o gap entre os itens
            testimonialCarousel.style.transform = `translateX(${offset}px)`;
        });
    }

    // Navegar para o próximo depoimento
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(currentIndex);
    });

    // Navegar para o depoimento anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentIndex);
    });

    // Ajustar o carrossel em redimensionamento (para garantir que o deslocamento esteja correto)
    window.addEventListener('resize', () => {
        showTestimonial(currentIndex);
    });

    // Iniciar o carrossel na posição inicial
    showTestimonial(currentIndex);


    // Animação de Scroll Suave para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feedback visual para o formulário de contato (exemplo básico)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        contactForm.reset(); // Limpa o formulário
    });
});