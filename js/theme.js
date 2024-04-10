//Changement de thèmes// 

const theme = {

    init : function( )
    {
        const lune = document.querySelector('.icon-moon');//ici j'ai mis une classe
        lune.addEventListener ('click', theme.changeTheme);
    },

// Je declare une fonction qui se chargera de passer du theme-dark au theme-light
changeTheme () 
{
    // Je veux recuperer l'element body
    const body = document.querySelector('body');

    // Si jamais le site est deja en dark mode
    if (body.classList.contains('theme-dark')) 
    {
        // Alors on le repasse en mode classique
        body.classList.remove('theme-dark');
    } else {
        // Sinon on le met en dark mode
        body.classList.add('theme-dark');
    }

    //Methode avec toggle : Ici toogle permet de cibler si une class existe, et si c'est le cas ne fait rien, en revanche si elle est absente des class de la liste, il va la rajouter. EN gros, on aurait pu juste mettre cette ligne pour faire notre action  (et supprimer le if)
    // body.classList.toggle('theme-dark');
}
};

// On lance l'application :
; // dans l'objet `app`, on exécute la fonction (méthode) stockée dans la clé `init`
// On ajoute un evenement sur tout le document pour s'assurer que le contenu de la page a bien ete charge
document.addEventListener('DOMContentLoaded', theme.init);


