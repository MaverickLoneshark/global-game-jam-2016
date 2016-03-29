function Engine() {
	this.intervalID;
	
	return;
}

Engine.prototype.start = function() {
	var thisEngine = this;

	this.intervalID = setInterval(function() {
		return thisEngine.loop();
	}, 0);
	
	return;
}

//TODO: DEFINE THIS IN GAME LOGIC
Engine.prototype.loop = function() {
	console.log("Please define Engine.prototype.loop()");
	clearInterval(this.intervalID);

	return;
}
