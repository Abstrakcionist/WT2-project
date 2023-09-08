let score = document.getElementById('score');
let button1 = document.getElementById('b1');
let button2 = document.getElementById('b2');
let count = 0;

button1.addEventListener('click', function () {
	count += 1;
	score.innerText = count;
});

button2.addEventListener('click', function(){
    count = 0
    score.innerText = count
});