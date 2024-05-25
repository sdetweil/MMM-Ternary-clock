
Module.register("MMM-Ternary-clock", {
	// define variables used by module, but not in

  getScripts: function(){ return ["ternary-clock.js"]},
	getDom: function(){
		let div = document.createElement('div')
		let svg = document.createElement('svg')
		div.id="main"
		svg.id='svgBox'
		svg.setAttribute('xmlns','http://www.w3.org/2000/svg')
		div.appendChild(svg)
		return div
		//return '<div id="main"><svg id="svgBox" xmlns="http://www.w3.org/2000/svg"></svg>'
	}

})