

var objs = document.getElementById ('objs')

// NANI 
for (var object of objects)
for (var obj of object) {

	var olink = document.createElement ('a')
	olink.href = obj.link

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

	objs.appendChild (olink)

	console.log (ob)
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
}


