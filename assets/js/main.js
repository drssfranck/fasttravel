// Script principal - Initialisation
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 Initialisation du site...');
    
    try {
        await loadComponents();
        initializeComponents();
        console.log('✅ Site initialisé avec succès !');
    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation:', error);
    }
});

async function loadComponents() {
    console.log('📦 Chargement des composants...');
    
    await loadComponent('header', 'header-container');
    await loadComponent('navbar', 'navbar-container');
    await loadComponent('content', 'content-container');
    await loadComponent('footer', 'footer-container');
}

function initializeComponents() {
    console.log('⚙️ Initialisation des composants...');
    
    // Vérifier que les composants existent avant de les initialiser
    if (typeof HeaderComponent !== 'undefined') {
        HeaderComponent.init();
    }
    
    if (typeof NavbarComponent !== 'undefined') {
        NavbarComponent.init();
    }
    
    if (typeof ContentComponent !== 'undefined') {
        ContentComponent.init();
    }
    
    if (typeof FooterComponent !== 'undefined') {
        FooterComponent.init();
    }
}