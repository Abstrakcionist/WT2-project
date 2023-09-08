let button1 = document.getElementById('completed')
let button2 = document.getElementById('return')
let main = document.getElementById('main')
let div = document.getElementById('plane')

button1.addEventListener('click', function(){
    main.removeChild(div)
    button1.remove()
})

button2.addEventListener('click', function(){
    div = document.createElement('div')
    div.className = 'cookie'
    div.id = 'plane'
    div.innerText = 'Что то про куки бла бла'
    main.appendChild(div)

    button1 = document.createElement('button')
    button1.id = 'completed'
    button1.innerText = 'Принять'
    button1.addEventListener('click', function () {
			main.removeChild(div)
			button1.remove()
		})
    main.appendChild(button1)
})