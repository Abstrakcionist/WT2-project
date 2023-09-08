let button1 = document.getElementById('b1')
let button2 = document.getElementById('b2')
const progressBar = document.querySelector('.progress-bar-inner')

function setProgressBar(value) {
	progressBar.style.width = value  + '%'
}

function updateProgressBar(value) {
	progressBar.style.width = (value + 1) + '%'
}

button1.addEventListener('click', function(){
    let num = document.getElementById('number').value;
    setProgressBar(num);
});

button2.addEventListener('click', function () {
    value = progressBar.style.width
	updateProgressBar(value)
})