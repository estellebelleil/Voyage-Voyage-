const colortheme = {

    init : function ()
    {
        const buttongreen = document.querySelector('#theme-green');
        console.log (buttongreen);
        buttongreen.addEventListener('click', colortheme.buttonGreen)

        const buttonblue = document.querySelector('#theme-blue');
        console.log (buttonblue);
        buttonblue.addEventListener('click', colortheme.buttonBlue)

        const buttonred = document.querySelector('#theme-red');
        console.log (buttonred);
        buttonred.addEventListener('click', colortheme.buttonRed)

         //ici on va vérifier la valeur du theme choisi par l'utilisateur et venir récupérer (get) la clé définie plus tôt en JSON (key = 'isgreen')
        const iscolorlocalstorage = localStorage.getItem ('colortheme');

        // On veut retransformer la JSON que l'on avait stocker dans le localStorage en variable JS exploitable (boolean)
        const iscolor = JSON.parse(iscolorlocalstorage);
        //ici je viens ajouter ma class dans le body
        document.body.classList.add(iscolor);


    },


buttonGreen ()
{
    const body = document.querySelector('body');
    body.classList.remove('theme-blue')
    body.classList.remove('theme-red')
    body.classList.add('theme-green')
    //ici on vient changer la source de l'image pour qu'a chaque clic on ajoute le logo png de la bonne couleur
    const logocolor= document.querySelector('.logo__image');
    logocolor.src = 'img/logo-theme-green.png';

    //STOCKAGE DANS LE LOCALSTORAGE 

    const colortheme = 'theme-green';
    const colorthemeforlocalstorage = JSON.stringify(colortheme)
    // On veut maintenant stocker la valeur transformer en JSON dans le localStorage (set= mettre quelque part). On définira la clé ici isgreen, et la valeur qu'on a transformé précedemment en JSON
    localStorage.setItem ('colortheme', colorthemeforlocalstorage)
},

buttonRed ()
{
    const body = document.querySelector('body');
    body.classList.remove('theme-green')
    body.classList.remove('theme-blue')
    body.classList.add('theme-red')

    const logocolor= document.querySelector('.logo__image');
    logocolor.src = 'img/logo-theme-red.png';

    const colortheme = 'theme-red';
    const colorthemeforlocalstorage = JSON.stringify(colortheme)
    // On veut maintenant stocker la valeur transformer en JSON dans le localStorage (set= mettre quelque part). On définira la clé ici isgreen, et la valeur qu'on a transformé précedemment en JSON
    localStorage.setItem ('colortheme', colorthemeforlocalstorage)
},

buttonBlue ()
{
    const body = document.querySelector('body');
    body.classList.remove('theme-green')
    body.classList.remove('theme-red')
    body.classList.add('theme-blue')

    const logocolor= document.querySelector('.logo__image');
    logocolor.src = 'img/logo-theme-blue.png';

   //STOCKAGE DANS LE LOCALSTORAGE 
        const colortheme = 'theme-blue';
        const colorthemeforlocalstorage = JSON.stringify(colortheme)
        // On veut maintenant stocker la valeur transformer en JSON dans le localStorage (set= mettre quelque part). On définira la clé ici isgreen, et la valeur qu'on a transformé précedemment en JSON
        localStorage.setItem ('colortheme', colorthemeforlocalstorage)
},



};





document.addEventListener('DOMContentLoaded', colortheme.init);


/*
    if (body.classList.contains('theme-blue')) 
    {
        body.classList.remove('theme-blue')
        body.classList.add('theme-green')
    }
    if (body.classList.contains('theme-red'))
    {
    body.classList.remove('theme-red')
    body.classList.add('theme-green')
    }
    if (body.classList.contains('theme-green'))
    {
        body.classList.remove('theme-green')
    }
},


    if (body.classList.contains(themeremove1)) 
    {
        body.classList.remove(themeremove1)
        body.classList.add(themeAajouter)
    }
    if (body.classList.contains(themeremove2))
    {
    body.classList.remove(themeremove2)
    body.classList.add(themeAajouter)
    }
    else (body.classList.contains(themeAajouter))
    {
    return true
}



*/