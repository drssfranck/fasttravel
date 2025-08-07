// Logique du footer
window.FooterComponent = {
    init: function() {
        console.log('🔧 Footer initialisé');
        this.bindEvents();
    },
    
    bindEvents: function() {
        // Gestion des liens du footer
        const footerLinks = document.querySelectorAll('.footer a');
        
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Si c'est un lien interne, empêcher le comportement par défaut
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    console.log(`Clic sur lien footer: ${link.textContent}`);
                }
            });
        });
        
        // Gestion des réseaux sociaux si présents
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    console.log('Clic sur réseau social');
                }
            });
        });
    }
};