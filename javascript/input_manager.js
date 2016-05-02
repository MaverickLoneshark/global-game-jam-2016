Engine.prototype.InputManager = (function() {
	function InputManager() {
		if(window.DEBUG) {
			console.log("InputManager loaded");
			console.log(this);
		}
		
		//var gamepads = navigator.getGamepads();
		//console.log(gamepads);
		
		document.onkeydown = this.handleInputDown;
		document.onkeyup = this.handleInputUp;
		
		return;
	}

	InputManager.prototype.handleInputDown = function(event) {
		if(window.DEBUG) {
			console.log(String.fromCharCode(event.keyCode) + " pressed ("+ event.keyCode +")");
		}
		
		return;
	}

	InputManager.prototype.handleInputUp = function(event) {
		if(window.DEBUG) {
			console.log(String.fromCharCode(event.keyCode) + " released ("+ event.keyCode +")");
		}
		
		return;
	}

	return new InputManager();
})();
