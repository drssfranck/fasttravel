// Logique du contenu
window.ContentComponent = {
    init: function() {
        console.log('🔧 Content initialisé');
        this.bindEvents();
    },
    
    bindEvents: function() {
        // Gestion des animations au scroll si nécessaire
        this.initScrollAnimations();
    },
    
    updateContent: function(section) {
        console.log(`📄 Mise à jour du contenu pour: ${section}`);
        
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        const contentData = {
            'Accueil': {
                title: 'Bienvenue sur Mon Site',
                subtitle: 'Découvrez nos services exceptionnels'
            },
            'À propos': {
                title: 'À propos de nous',
                subtitle: 'Une équipe passionnée dédiée à votre succès'
            },
            'Services': {
                title: 'Nos Services',
                subtitle: 'Solutions complètes pour tous vos besoins'
            },
            'Contact': {
                title: 'Contactez-nous',
                subtitle: 'Nous sommes là pour vous aider'
            }
        };
        
        const data = contentData[section];
        if (data) {
            if (heroTitle) heroTitle.textContent = data.title;
            if (heroSubtitle) heroSubtitle.textContent = data.subtitle;
        }
    },
    
    initScrollAnimations: function() {
        // Animations au scroll si nécessaire
        console.log('🎬 Animations de scroll initialisées');
    }
};