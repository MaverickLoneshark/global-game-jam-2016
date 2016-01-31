(function(){
	function GameObject() {
		position: [0, 0, 0],
		audioProperties: {
			source: null,
			volume: 0
		}
		
		return;
	}
	
	var Coin = new GameObject();
	
	
	var engine = new Engine();
	engine.deltaTime = new Date().getTime();
	
	engine.loop = function() {
		var date = new Date(),
			difference = date.getTime() - this.deltaTime;
		
		if(difference >= 1000) {
//console.log("Frame time interval: " + difference);
			this.deltaTime = date.getTime();
		}
		
		return;
	}
	
	return engine.start();
})();
