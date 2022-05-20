

var topp = document.getElementById ('top')
var img = document.getElementById ('img')
var nam = document.getElementById ('nam')
var but = document.getElementById ('but')
var lin = document.getElementById ('lin')
var sav = document.getElementById ('sav')

var txt = document.getElementById ('txt')

var ist = (window.location.search)
ist = ist.substring (4, ist.length)

var i = parseInt (ist.substring (0, 1))
var j = parseInt (ist.substring (1, ist.length))

var obj = objects[i][j]

img.src = obj.img
nam.innerHTML = obj.name
but.addEventListener ('click', () => {
	lin.href = obj.link
})

txt.innerHTML = obj.txt


style ()
window.addEventListener ('resize', () => {
	style ()
})
	
function style () {


	topp.style.height = (Math.floor (window.innerHeight * 0.6)).toString () + 'px'
	but.style.height = (Math.floor (parseInt (topp.style.height) * 0.65)).toString () + 'px'
	but.style.marginTop = (Math.floor (parseInt (topp.style.height) * 0.05)).toString () + 'px'
	sav.style.height = (Math.floor (parseInt (topp.style.height) * 0.15)).toString () + 'px'
	sav.style.marginTop = (Math.floor (parseInt (topp.style.height) * 0.05)).toString () + 'px'


	if (parseInt (window.innerWidth) < 350) {}
}

var menu = document.getElementById ('menu')
var cloc = window.location.href
var fr
for (var it = 0; it < cloc.length; it++) {
	if (cloc[it] == 'I' && cloc[it + 1] == 't' && cloc[it + 2] == 'e' && cloc[it + 3] == 'm') {
		fr = it
		break
	}
}
var loc = (cloc).substring (0, fr) + 'Supply.html'

menu.href = loc
