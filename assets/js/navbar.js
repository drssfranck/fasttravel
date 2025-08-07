// Logique de la navbar
window.NavbarComponent = {
    init: function() {
        console.log('🔧 Navbar initialisée');
        this.bindEvents();
    },
    
    bindEvents: function() {
        // Gestion du menu mobile
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                Utils.toggleClass(navMenu, 'active');
                console.log('Toggle menu mobile');
            });
        }
        
        // Gestion de la navigation
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Retirer la classe active
                navLinks.forEach(l => Utils.removeClass(l, 'active'));
                
                // Ajouter la classe active au lien cliqué
                Utils.addClass(link, 'active');
                
                console.log(`Navigation vers: ${link.textContent}`);
                
                // Mettre à jour le contenu si ContentComponent existe
                if (window.ContentComponent) {
                    ContentComponent.updateContent(link.textContent);
                }
                
                // Fermer le menu mobile
                if (navMenu) {
                    Utils.removeClass(navMenu, 'active');
                }
            });
        });
    }
};