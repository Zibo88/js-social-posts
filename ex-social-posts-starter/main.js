// Ciao ragazzi,
// esercizio di oggi: Social Posts
// nome repo: js-social-posts
// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// creo un array di oggetti

const arrayPost = [

    // primo post
    {
        id: 1,
        name: 'carlo',
        picture:'https://unsplash.it/300/300?image =1',
        date: '05-12-2021',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit cumque, perferendis earum est laudantium consectetur molestias magni blanditiis',
        img: 'https://unsplash.it/300/300?image=2',
        like: 80,
    },
    // secondo post
    {
        id: 2,
        name: 'anna',
        picture:'https://unsplash.it/300/300?image=3',
        date: '05-11-2020',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit cumque, perferendis earum est laudantium consectetur molestias magni blanditiis',
        img: 'https://unsplash.it/300/300?image=4',
        like: 90,
    },
    {
        id: 3,
        name: 'Claudio',
        picture: null,
        date: '06-06-2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit cumque, perferendis earum est laudantium consectetur molestias magni blanditiis',
        img: 'https://unsplash.it/300/300?image=5',
        like: 50,
    },

]


 // richiamo la funzione
 createPost(arrayPost)
//  console.log(createPost)

// FUNCTIONS
// funzione che crea il post

function createPost (posts){
    // creo un ciclo for che analizzi gli oggetti nell'array
    for(i = 0; i < posts.length; i++){

        // richiamo il container dei post
        let postContainer = document.getElementById('container');
        // console.log(postContainer)
        
        

        // salvo i singoli oggetti
        let myPost = posts[i]
        // console.log(myPost);

        // oggetto da destrutturare
        const { id, name, picture, date, text, img, like } = myPost;
        // console.log(name, picture, date, text, img, like)

        // console.log(myPost)
        // console.log(myPost.name)

        let newPost = 
        `
        <div class= "post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${picture === null ? 'https://unsplash.it/300/300?image= 5' : picture } alt="Phil Mangione">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>
                </div>
            </div>

            <div class="post__text">
                ${text}
            </div>

            <div class="post__image">
                <img src= ${img} alt="">
            </div>

            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id= ${id} class="js-likes-counter">${like}</b> persone
                    </div>
                </div>
            </div>
        </div>

        `
        // console.log(newPost)

        postContainer.innerHTML += newPost

        // console.log(postContainer.innerHTML)
    }
}
// richiamo i bottoni per i like
let likeButton = document.querySelectorAll('.js-like-button');
console.log("queryselector: ", likeButton);

// richiamo il testo correlato al click su like
let numbersOfLike = document.querySelectorAll('.likes__counter .js-likes-counter')
console.log("queryselector: ",numbersOfLike)

// scorro gli elementi e li salvo in una variabile
for(let i = 0; i< likeButton.length; i++){
    // salvo tutti gli elementi (mi piace)
    let like = likeButton[i];
    console.log(like)

    // creo la funzione click
    like.addEventListener('click', function(event){
            event.preventDefault();

            // aggiungi il like solo se l'elemento non ha gia la classe
            // like-button--liked
            if(!this.classList.contains('like-button--liked')){
                 // creo una variabile per salvare gli elementi relativi che hanno lo stesso indice
                let caption = numbersOfLike[i];
                console.log(caption);
                // tramutiamo il numero in un dato numerico
                let captionNumber = parseInt(caption.innerHTML)
                console.log(captionNumber)

                // incrementiamo di 1 al click
                captionNumber++
                console.log(captionNumber)

                // stampo l'incremento della variabile
                caption.innerHTML = captionNumber

                // aggiungo una classe
                this.classList.add('like-button--liked');
            }
           
            
        }
    )
            
}
        
