
//var objs = document.getElementById ('objs')

// NANI 
var i = 0
for (var object of objects) {
	var j = 0
	for (var obj of object) {

		var olink = document.createElement ('a')
		var cloc = window.location.href
		var fr = undefined
		for (var it = 0; it < cloc.length; it++) {
			if (cloc[it] == 'S' && cloc[it + 1] == 'u' && cloc[it + 2] == 'p' && cloc[it + 3] == 'p' && cloc[it + 4] == 'l' && cloc[it + 5] == 'y') 
				if (!fr) 
					fr = 1
				else {
					fr = it
					break
				}
		}
		var loc = (cloc).substring (0, it) + 'Item.html?id=' + i.toString () + j.toString ()
		olink.href = loc

		var oimg = document.createElement ('img')
		oimg.src = obj.img
		oimg.className = 'imgs'

		var oname = document.createElement ('p')
		oname.innerHTML = obj.name

		var ob = document.createElement ('div')
		ob.className = 'ob'

		ob.appendChild (oimg)
		ob.appendChild (oname)
		olink.appendChild (ob)

		var objs = document.getElementById ('objs' + i.toString ())
		objs.appendChild (olink)

		console.log (ob)
		j++
	}

	i++
}

var ob = document.getElementsByClassName ('ob')

style ()
window.addEventListener ('resize', () => {
	style ()
})
	
function style () {

	for (o of ob) {
		o.style.height = (Math.floor (window.innerHeight * 0.4)).toString () + 'px'
	}

	if (parseInt (window.innerWidth) < 350) {
		for (o of ob) {
			o.style.width = '80%'
		}
	} else if (parseInt (window.innerWidth) < 550) {
		for (o of ob) {
			o.style.width = '40%'
		}
	} else {
		for (o of ob) {
			o.style.width = '25%'
		}
	}
}

//