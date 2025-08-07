// Logique du header
window.HeaderComponent = {
    init: function() {
        console.log('🔧 Header initialisé');
        this.bindEvents();
    },
    
    bindEvents: function() {
        // Gestion des boutons du header
        const loginBtn = document.querySelector('.header .btn:first-of-type');
        const signupBtn = document.querySelector('.header .btn:last-of-type');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Clic sur Connexion');
                // Logique de connexion
            });
        }
        
        if (signupBtn) {
            signupBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Clic sur S\'inscrire');
                // Logique d'inscription
            });
        }
    }
};