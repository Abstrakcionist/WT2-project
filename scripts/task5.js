let cards = document.getElementsByClassName('block')
let button = document.getElementById('b1')
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}


let red = 0
let green = 0
let blue = 0


button.addEventListener('click', function(){
    red = randomInteger(0, 255)
    green = randomInteger(0, 255)
    blue = randomInteger(0, 255)

    for (let i = 0; i < 3; i++){
        cards[i].style.background = `rgb(${blue}, ${green}, ${blue})`
        if ((red + green + blue) >= 382){
            cards[i].style.color = 'black'
        }
        else{
            cards[i].style.color = 'rgb(255, 255, 255)'
        }
    }
})
