const body = document.querySelector("body") ;
const IMG_LEN = 3 ; 

function paintImage(imgNumber) { 
    const image = new Image()
    image.src = `img/img${imgNumber +1 }.jpg` 
    image.classList.add("bgImage")
    body.appendChild(image) 
}; 

function genRandom() { 
    const number = Math.floor(Math.random()* IMG_LEN) ; 
    return number
} ;

function init() { 
    const randomNumber = genRandom() 
    paintImage(randomNumber)

} ;

init() ;