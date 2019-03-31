/*
How to use:

<div class="ailoslider" id="sl1"></div>

and then

<script src="./ailoslider.js"></script>
<script>
var sl1 = ailoslider_create('sl1', [
{img:'1.jpg', title:'first legend'},
{img:'2.jpg', title:'second legend'},
{img:'3.jpg', title:'third legend'},
], swipe=false);
</script>

The rest (buttons, pagination) is added automatically.
*/

slideshows = [];

function ailoslider_create(id, images, swipe=false)
{
    var container = document.getElementById(id);

    /* Getting the images */
    slideshows[id] = images;

    /* <img> */
    var img = document.createElement('img');
    container.appendChild(img);

    /* legend */
    var legend = document.createElement('span');
    legend.classList.add('legend');
    container.appendChild(legend);

    /* previous and next button */
    var previousButton = document.createElement('a');
    previousButton.classList.add('previous');
    previousButton.onclick = function(){ ailoslider_jump(id, -1) };
    previousButton.innerHTML = '&#10094;';
    container.appendChild(previousButton);
    var nextButton = document.createElement('a');
    nextButton.classList.add('next');
    nextButton.onclick = function(){ ailoslider_jump(id, +1) };
    nextButton.innerHTML = '&#10095;';
    container.appendChild(nextButton);

    /* page number */
    var previousButton = document.createElement('span');
    previousButton.classList.add('pagination');
    previousButton.innerHTML = '1 / '+slideshows[id].length;
    container.appendChild(previousButton);

    /* overlay (to manage swipe) */
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    container.appendChild(overlay);

    /* swipe */
    if(swipe)
    {
        var hammertime = new Hammer(document.getElementById(id));
        hammertime.on('swipeleft', function(ev) { ailoslider_jump(id, +1); });
        hammertime.on('swiperight', function(ev) { ailoslider_jump(id, -1); });
    }

    /* first image */
    img.src = slideshows[id][0].img;
    img.title = slideshows[id][0].title;
    img.alt = slideshows[id][0].title;
    legend.innerHTML = slideshows[id][0].title;
    container.dataset.currentImage = 0;
}

function ailoslider_jump(id, number)
{
    var slideshow = document.getElementById(id);
    var slideshowImg = slideshow.getElementsByTagName('img')[0];
    var currentImage = parseInt(slideshow.dataset.currentImage);

    if(currentImage == slideshows[id].length-1 && number > 0)
    {
        currentImage = 0;
    }
    else if(currentImage == 0 && number < 0)
    {
        currentImage = slideshows[id].length-1;
    }
    else
    {
        currentImage += number;
    }

    slideshowImg.src = slideshows[id][currentImage].img;
    slideshowImg.title = slideshows[id][currentImage].title;
    slideshowImg.alt = slideshows[id][currentImage].title;

    slideshow.getElementsByClassName('legend')[0].innerHTML = slideshows[id][currentImage].title;
    slideshow.getElementsByClassName('pagination')[0].innerHTML = (currentImage+1)+' / '+slideshows[id].length;

    slideshow.dataset.currentImage = currentImage;
}
