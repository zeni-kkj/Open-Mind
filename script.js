document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        document.body.classList.toggle('no-scroll'); 
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
    mobileLinks.forEach(link => {
        if (!link.id.includes('login') && !link.id.includes('cadastro')) { 
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        }
    });

    const loginModal = document.getElementById('login-modal');
    const loginLinkDesktop = document.getElementById('login-link-desktop');
    const loginLinkMobile = document.getElementById('login-link-mobile');
    const loginLinkRodape = document.getElementById('login-link-rodape'); 
    const closeButtonLogin = document.querySelector('.close-button-login');
    const loginForm = document.getElementById('login-form');
    
    const switchToCadastroLink = document.querySelector('.switch-to-cadastro');

    function openLoginModal(e) {
        if (e) e.preventDefault(); 
        loginModal.classList.add('active');
        document.body.classList.add('no-scroll'); 
        
        if (mobileMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    }

    function closeLoginModal() {
        loginModal.classList.remove('active');
        document.body.classList.remove('no-scroll'); 
    }

    if (loginLinkDesktop) {
        loginLinkDesktop.addEventListener('click', openLoginModal);
    }
    if (loginLinkMobile) {
        loginLinkMobile.addEventListener('click', openLoginModal);
    }
    if (loginLinkRodape) {
        loginLinkRodape.addEventListener('click', openLoginModal);
    }
    
    if (closeButtonLogin) {
        closeButtonLogin.addEventListener('click', closeLoginModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            closeLoginModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && loginModal.classList.contains('active')) {
            closeLoginModal();
        }
    });

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            alert('Login simulado realizado com sucesso!');
            closeLoginModal();
        });
    }

    const cadastroModal = document.getElementById('cadastro-modal');
    const cadastroLink = document.getElementById('cadastro-link');
    const closeButtonCadastro = document.querySelector('.close-button-cadastro');
    const cadastroForm = document.getElementById('cadastro-form');
    
    const switchToLoginLink = document.querySelector('.switch-to-login'); 

    function openCadastroModal(e) {
        if (e) e.preventDefault(); 
        cadastroModal.classList.add('active');
        document.body.classList.add('no-scroll'); 
        
        if (mobileMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    }

    function closeCadastroModal() {
        cadastroModal.classList.remove('active');
        document.body.classList.remove('no-scroll'); 
    }

    if (cadastroLink) {
        cadastroLink.addEventListener('click', openCadastroModal);
    }

    if (closeButtonCadastro) {
        closeButtonCadastro.addEventListener('click', closeCadastroModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target == cadastroModal) {
            closeCadastroModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && cadastroModal.classList.contains('active')) {
            closeCadastroModal();
        }
    });

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            alert('Cadastro simulado com sucesso!');
            closeCadastroModal();
        });
    }
    
    if (switchToLoginLink) {
        switchToLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeCadastroModal();
            openLoginModal(e); 
        });
    }

    if (switchToCadastroLink) {
        switchToCadastroLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeLoginModal();
            openCadastroModal(e); 
        });
    }
});