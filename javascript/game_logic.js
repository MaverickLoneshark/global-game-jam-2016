var DEBUG = true,
	GAME = null;

function Game() {
	this.initialize();
	this.engine.start();
	
	return this;
}

Game.prototype.initialize = function() {
	var gameSounds = [
			"assets/coin_sound.wav",
			"assets/gather_sound.mp3",
			"assets/anvil.wav",
			"assets/clang.wav",
			"assets/low_bell.wav",
			"assets/monster.wav",
			"assets/pan_dong.wav",
			"assets/pan_hit.wav",
			"assets/tinkling.wav",
			"assets/trainsound.wav"
		];
	
	this.GameObjects = (function() {
		function GameObjects() {
			function GameObject() {
				this.position = [0, 0, 2];
				this.audioProperties = {
					source: [],
					volume: 0,
					position: [0, 0, 2]
				};
				
				return;
			}
			
			this.createPlayer = function() {
				var player = new GameObject();
				player.score = 0;
				player.hitpoints = 3;
				
				return player;
			}
			
			this.createCoin = function() {
				var coin = new GameObject();
				coin.audioProperties.source[0] = gameSounds[0];
				
				return coin;
			}
			
			this.createMonster = function() {
				var monster = new GameObject();
				monster.audioProperties.source[0] = gameSounds[5];
				
				return monster;
			}
			
			this.createObstacle = function() {
				var obstacle = new GameObject();
				obstacle.audioProperties.source[0] = gameSounds[4];
				
				return obstacle;
			}
			
			return;
		}
		
		return new GameObjects();
	})();
	
	this.engine = new Engine();
	this.player = this.GameObjects.createPlayer();
	this.engine.SoundManager.loadSoundLibrary(gameSounds);
	this.engine.deltaTime = new Date().getTime();
	
	this.engine.loop = function() {
		var date = new Date(),
			difference = date.getTime() - this.deltaTime;
		
		if(difference >= 1000) {
//console.log("Frame time interval: " + difference);
			this.deltaTime = date.getTime();
		}
		
		return;
	}
	
	return;
}

Game.prototype.test = function() {
	var testCoin = this.GameObjects.createCoin(),
		testCoin2 = this.GameObjects.createCoin(),
		testMonster = this.GameObjects.createMonster(),
		testObstacle = this.GameObjects.createObstacle();
	
	testCoin.audioProperties.position = [0.5, 0, 1];
	testCoin2.audioProperties.position = [0.5, 0, 1];
	testCoin2.audioProperties.source[0] = this.engine.SoundManager.soundLibrary[8];
	console.log(testCoin);
	console.log(testCoin2);
	
	this.engine.SoundManager.playAudio(testCoin.audioProperties.source[0], testCoin.audioProperties);
	this.engine.SoundManager.playAudio(testCoin2.audioProperties.source[0], testCoin2.audioProperties);
	
	return;
}

GAME = new Game();
