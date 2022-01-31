const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


slides ="";

for ( let i = 0; i < items.length; i++) {

    //ciclo for per creare l'html da mettere nel container
    slides += ` <div class="main-item">
                    <img src="${items[i]}">
                    <div class="img-info">
                        <h2> ${title[i]} </h2>
                        <p> ${text[i]} </p>
                    </div>
                    
                </div> ` ;
}

//creo una variabile che contenga tutti gli items
let mainSlide = document.getElementById("main-slide");

//metto la variabile contenente tutto nel container
mainSlide.innerHTML = slides; //non sono visibili perchè non c'è classe "active"

//creo una variabile che traccia la slide attuale
actualSlide = 0;

//creo un array delle slides per aggiungere la classe active
let allItem = document.getElementsByClassName("main-item");

allItem[actualSlide].classList.add("active");
