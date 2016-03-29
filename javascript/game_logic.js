(function(){
	var engine = new Engine(),
		player = new Player(),
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
	
	function GameObject() {
		this.position = [0, 0, 2];
		this.audioProperties = {
			source: [],
			volume: 0
		};
		
		return;
	}
	
	function Player() {
		var player = new GameObject();
		player.score = 0;
		player.hitpoints = 3;
		
		return player;
	}
	
	function Coin() {
		var coin = new GameObject();
		coin.audioProperties.source[0] = gameSounds[0];
		
		return coin;
	}
	
	function Monster() {
		var monster = new GameObject();
		monster.audioProperties.source[0] = gameSounds[5];
		
		return monster;
	}
	
	function Obstacle() {
		var obstacle = new GameObject();
		obstacle.audioProperties.source[0] = gameSounds[4];
		
		return obstacle;
	}
	
	var testCoin = new Coin(),
		testMonster = new Monster(),
		testObstacle = new Obstacle();
	
	//engine.SoundManager.loadSoundLibary(gameSounds);
	
	console.log(Coin);
	console.log(testCoin);
	
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
