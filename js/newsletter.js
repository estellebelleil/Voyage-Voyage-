const newsletter = {
    // Initialisation de notre "module"
    init: function() {

        // Recuperer tous les elements necessaires a la gestion de la newsletter (querySelector)
        // Récupérer l'id correspondant à la newsletter du menu
        const newsletterButton = document.querySelector('#newsletterButton');
        // Associer à chacun de ces elements le bon evenement ('click', 'submit')
        
        // Ajouter un evenement au click sur ce lien
        newsletterButton.addEventListener('click', newsletter.handleNewsletter);

        // Selectionner la croix de l'encart newsletter
        const crossNewsletterClose = document.querySelector('.newsletter__close');

        // Ajouter un evenement au click sur la croix
        crossNewsletterClose.addEventListener('click', newsletter.handleNewsletterClose);

        // Recuperer l'element formulaire
        const newsletterForm = document.querySelector('.newsletter form');

        // Ajouter l'ecouteur d'evenement sur le formulaire de type submit
        newsletterForm.addEventListener('submit', newsletter.handleFormSubmit);
    },


    // Creer la fonction qui sera appelle quand l'evenement sera declenche
    handleNewsletter: function(event) {
        // On veut empecher le navigateur de produire son comportement par defaut sur une balise <a>
        event.preventDefault();
        // Faire apparaitre la newsletter en ajoutant la bonne classe
        const newsletter = document.querySelector('.newsletter');
        // On ajoute la classe newsletter--on pour faire apparaitre la newsletter
        newsletter.classList.add('newsletter--on');
    },
    // Creer la fonction qui sera appelle quand l'evenement sera declenche
    handleNewsletterClose: function() {
        // Recuperer l'element newsletter
        const newsletter = document.querySelector('.newsletter');
        // Supprimer la classe newsletter--on pour la faire disparaitre
        newsletter.classList.remove('newsletter--on');
    },
        // La fonction qui sera appelée lorsque le formulaire sera soumis
    handleFormSubmit: function (event) {
        // On recupere la valeur de l'email entré par l'utilisateur
        const input = document.querySelector('#subscriber-email');
        const userEmail = input.value;

            // Et verifier si l'adresse de l'utilisateur contient un de ces domaines interdits    
            if (!newsletter.isEmailValid(userEmail)) {
                event.preventDefault();
                const newsletter = document.querySelector('.newsletter');
                messages.add('Ce n\'est pas une adresse autorisée', newsletter);
            }
        
    },
    isEmailValid: function(userEmail) {
            // Declaration d'un tableau contenant toutes les adresses interdites
            const forbiddenDomains = [
                '@yopmail.com',
                '@yopmail.fr',
                '@yopmail.net',
                '@cool.fr.nf',
                '@jetable.fr.nf',
                '@courriel.fr.nf',
                '@moncourrier.fr.nf',
                '@monemail.fr.nf',
                '@monmail.fr.nf',
                '@hide.biz.st',
                '@mymail.infos.st',
            ];
        
            // On veut boucler sur toutes les adresses interdites
            for (const forbiddenDomain of forbiddenDomains) {
                // Et verifier si l'adresse de l'utilisateur contient un de ces domaines interdits    
                if (userEmail.includes(forbiddenDomain)) {
                    return false;
                }
            }
            return true;
        }
}


document.addEventListener('DOMContentLoaded', newsletter.init);