// RADUNO LE IMMAGINI
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
// const images = [

//     "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
//     "img/02.jpg",
//     "img/03.jpg",
//     "img/04.jpg",
//     "img/05.jpg",
// ];

const carousel = document.querySelector('.carousel');
const thumb = document.querySelector('.thumb');

    for(let i = 0 ; i < images.length ; i++) {

        carousel.innerHTML += 

        `   
        <hgroup class= "innerTitle">
            <h1>${images[i].title}</h1>
            <h2>${images[i].description}</h2>
        </hgroup>
        <img class="item" src="${images[i].url}">
        `;

    }
    
    console.log(images);



    //AGGIUNGO LA CLASSE SHOW AL PRIMO(0, coefficiente che ACTIVE recupera da ItemNumber) ELEMENTO
    let itemNumber = 0;
    const active = document.getElementsByClassName('item');
    const innerTitle = document.getElementsByClassName('innerTitle');
    const pre = document.getElementsByClassName('.preItem');

    active[itemNumber].classList.add('show');


    // CREO L'EVENTO NEXT 

    const up = document.querySelector('.up');

    up.addEventListener ( 'click', 
    function() {

        if(itemNumber <= 3) {

            thumbmailIn[itemNumber].classList.remove('selected')
            active[itemNumber].classList.remove('show')
            innerTitle[itemNumber].classList.remove('show');
            itemNumber++
            innerTitle[itemNumber].classList.add('show');
            active[itemNumber].classList.add('show');
            thumbmailIn[itemNumber].classList.add('selected')

        }

        else {

            thumbmailIn[itemNumber].classList.remove('selected')
            active[itemNumber].classList.remove('show');
            innerTitle[itemNumber].classList.remove('show');
            itemNumber = 0;
            innerTitle[itemNumber].classList.add('show');
            active[itemNumber].classList.add('show');
            thumbmailIn[itemNumber].classList.add('selected')

        }

    }
    );

    const down = document.querySelector('.down')

    down.addEventListener ( 'click', 
    function() {

        if(itemNumber > 0) {

            thumbmailIn[itemNumber].classList.remove('selected')
            active[itemNumber].classList.remove('show');
            innerTitle[itemNumber].classList.remove('show');
            itemNumber--
            innerTitle[itemNumber].classList.add('show');
            active[itemNumber].classList.add('show');
            thumbmailIn[itemNumber].classList.add('selected')
            

        }

        else {
            thumbmailIn[itemNumber].classList.remove('selected')
            active[itemNumber].classList.remove('show');
            innerTitle[itemNumber].classList.remove('show');
            itemNumber = 4
            innerTitle[itemNumber].classList.add('show');
            active[itemNumber].classList.add('show');
            thumbmailIn[itemNumber].classList.add('selected')
        }
    }
    );



    for(let i = 0 ; i < images.length ; i++) {

        thumb.innerHTML += 
        ` <input type="button" class="thumbmail" style="background-image: url('${images[i].url}')">` 
        ;
    }

    // const activeThumb = document.querySelector('.thumbmail')[thumbmailIn];

    let thumbmailIn = document.querySelectorAll('.thumbmail');
    console.log(thumbmailIn);

    thumbmailIn[0].addEventListener('click', 
    function(){

        thumbmailIn[itemNumber].classList.remove('selected')
        thumbmailIn[0].classList.add('selected')
        active[itemNumber].classList.remove('show');
        innerTitle[itemNumber].classList.remove('show');
        itemNumber = 0
        innerTitle[itemNumber].classList.add('show');
        active[0].classList.add('show')
                
    }         
    );

    thumbmailIn[1].addEventListener('click', 
    function(){

        thumbmailIn[itemNumber].classList.remove('selected')
        thumbmailIn[1].classList.add('selected')
        active[itemNumber].classList.remove('show');
        innerTitle[itemNumber].classList.remove('show');
        itemNumber = 1
        innerTitle[itemNumber].classList.add('show');
        active[1].classList.add('show')
       
    }         
    );

    thumbmailIn[2].addEventListener('click', 
    function(){

        thumbmailIn[itemNumber].classList.remove('selected')
        thumbmailIn[2].classList.add('selected')
        active[itemNumber].classList.remove('show');
        innerTitle[itemNumber].classList.remove('show');
        itemNumber = 2
        innerTitle[itemNumber].classList.add('show');
        active[2].classList.add('show')
    }   
    );

    thumbmailIn[3].addEventListener('click', 
    function(){

        thumbmailIn[itemNumber].classList.remove('selected')
        thumbmailIn[3].classList.add('selected')
        active[itemNumber].classList.remove('show');
        innerTitle[itemNumber].classList.remove('show');
        itemNumber = 3
        innerTitle[itemNumber].classList.add('show');
        active[3].classList.add('show')
    }         
    );

    thumbmailIn[4].addEventListener('click', 
    function(){

        thumbmailIn[itemNumber].classList.remove('selected')
        thumbmailIn[4].classList.add('selected')
        active[itemNumber].classList.remove('show');
        innerTitle[itemNumber].classList.remove('show');
        itemNumber = 4
        innerTitle[itemNumber].classList.add('show');
        active[4].classList.add('show')
    }         
    );