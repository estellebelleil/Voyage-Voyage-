
function addImagesToSlider() 
{
        // Le tableau qui contient la liste des images
        const sliderImages = [
            'ocean.jpg',
            'ski.jpg',
            'city.jpg'
        ];
        
        // On doit recuperer un element de reference (ici le slider)
        const slider = document.querySelector('.slider');

        // Ajout des images dans le slider
        for (const sliderImage of sliderImages) {
            // Creation et ajout des propietes a notre image
            // Creer une nouvelle image
            const newImage = document.createElement('img');
            // On vient ajouter une source a notre image
            newImage.src = 'img/' + sliderImage;
            // On vient ajouter un texte alternatif a notre image
            newImage.alt = 'Image du carousel';

            /*on veut que dès lors qu'on clique, on retire l'img current, de la première image et qu'on la mette sur la seconde image etc. */

            // On vient ajouter les classes slider__img et slider__img--current
            newImage.classList.add('slider__img');
            
            // Ajout de cette image a notre page web
            // On doit venir inserer notre image comme premier enfant du slider
            slider.prepend(newImage);
        }

        const firstImage = document.querySelector('.slider__img');
        firstImage.classList.add('slider__img--current');
}

//console.log (addImagesToSlider)



const previousButton = document.querySelector('#previous');

const nextButton = document.querySelector('#next');


// POur la section if de la function previous//
function previous(event)
{
    event.preventDefault();

    const slidersImg = document.querySelectorAll ('.slider__img');

    /*quand on clic, on va supprimer notre class img sur notre index 0*/

    slidersImg[actualIndex].classList.remove('slider__img--current')

    /*quand on clic, on va aussi ajouter notre class img à notre index 1 */
    //Décrémentation:
    actualIndex--

    if (actualIndex < 0)
    {
        actualIndex = slidersImg.length -1;
    }


    slidersImg[actualIndex].classList.add('slider__img--current')
    
}

let actualIndex = 0;
function next(event)
{
    event.preventDefault();
    
    const slidersImg = document.querySelectorAll ('.slider__img');

    /*quand on clic, on va supprimer notre class img sur notre index 0*/

    slidersImg[actualIndex].classList.remove('slider__img--current')

    /*quand on clic, on va aussi ajouter notre class img à notre index 1 */
    //Incrémentation
    actualIndex++

    if (actualIndex == slidersImg.length)
    {
        actualIndex = 0;
    }


    slidersImg[actualIndex].classList.add('slider__img--current')
    

}
addImagesToSlider();
previousButton.addEventListener ('click', previous)
nextButton.addEventListener ('click', next)
