(function(){
	function GameObject() {
		var position = [0, 0, 0],
			audioProperties = {
				source: [],
				volume: 0
			}
		
		return;
	}
	
	var Coin = new GameObject(),
		Monster = new GameObject(),
		Obstacle = new GameObject(),
		Player = new GameObject(),
		engine = new Engine(),
		gameSounds = [
			"assets/coin_sound.wav",
			"assets/gather_sound.mp3",
			"assets/anvil.wav",
			"assets/clang.wav",
			"assets/low_bell.wav",
			"assets/monster.wav",
			"assets/pan_dong.wav",
			"assets/pan_hit.wav",
			"assets.tinkling.wav",
			"assets/trainsound.wav"
		];
	
	Player.score = 0;
	Player.hitpoints = 3;
	
	engine.SoundManager.loadSoundLibary(gameSounds);
	Coin.audioProperties.source[0] = gameSounds[0];
	Monster.audioProperties.source[0] = gameSounds[5];
	Obstacle.audioProperties.source[0] = gameSounds[4];
	
	
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
