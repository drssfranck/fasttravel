// Fonctions utilitaires globales
window.Utils = {
    loadComponent: async function(componentName, containerId) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
            console.log(`✅ Composant ${componentName} chargé avec succès`);
        } catch (error) {
            console.error(`❌ Erreur lors du chargement de ${componentName}:`, error);
        }
    },
    
    addClass: function(element, className) {
        if (element) element.classList.add(className);
    },
    
    removeClass: function(element, className) {
        if (element) element.classList.remove(className);
    },
    
    toggleClass: function(element, className) {
        if (element) element.classList.toggle(className);
    }
};

// Fonction globale pour le chargement des composants
window.loadComponent = window.Utils.loadComponent;