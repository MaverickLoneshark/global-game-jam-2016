Engine.prototype.SoundManager = (function() {
	function SoundManager() {
		this.audioElement = [];
		this.panner = [];
		
		var i;
		for(i = 0; i < 6; i++) {
			this.audioElement[i] = document.createElement("audio");
//disable this for production
this.audioElement[i].crossOrigin = "anonymous";
			this.panner[i] = this.createPanner(this.audioElement[i]);
		}
		
		if(window.DEBUG) {
			console.log("SoundManager loaded");
			console.log(this);
		}
		
		return;
	}
	
	SoundManager.prototype.loadSoundLibrary = function(soundArray) {
		this.soundLibrary = soundArray;
		
		return;
	}
	
	SoundManager.prototype.createPanner = function(audioElement) {
		var AudioContext = window.AudioContext || window.webkitAudioContext,
			audioCtx = new AudioContext(),
			source = audioCtx.createMediaElementSource(audioElement),
			panner = audioCtx.createStereoPanner();
		
		source.connect(panner);
		panner.connect(audioCtx.destination);
		panner.pan.value = 0;
		audioCtx.listener.setPosition(0,0,0);
		audioCtx.listener.setOrientation(0,0,-1, 0, 1, 0);
		
		return panner;
	}

	SoundManager.prototype.getFreeAudioElementIndex = function() {
		var audioIndex = -1,
			i;
		
		for(i = 0; i < this.audioElement.length; i++) {
			if((!this.audioElement[i].duration) || this.audioElement[i].ended) {
				audioIndex = i;
				break;
			}
		}
		
		return audioIndex;
	}
	
	SoundManager.prototype.playAudio = function(gameObject, soundIndex) {
		var audioIndex = this.getFreeAudioElementIndex();
		
		if(audioIndex >= 0) {
			this.audioElement[audioIndex].src = gameObject.audioProperties.source[soundIndex];
			//this.audioElement[audioIndex].load();
			this.moveAudio(audioIndex, gameObject.audioProperties.position);
			this.audioElement[audioIndex].play();
		}
		return;
	}
	
	SoundManager.prototype.moveAudio = function(audioIndex, position) {
		this.panner[audioIndex].pan.value = position[0];
		this.audioElement[audioIndex].volume = (position[2] > 0) ? (1 - position[2]) : (1 + position[2]);
		
		return;
	}
	
	SoundManager.prototype.test = function() {
		//test whatever you want here =)
		
		var monster = GAME.GameObjects.createMonster(),
			thisSoundManager = this;
		
		monster.audioProperties.source[0] = "http://maverickloneshark.github.io/global-game-jam-2016/assets/monster.wav";
		monster.audioProperties.volume = 1.0;
		monster.audioProperties.position = [0, 0, 0];
		
		function callMonster(monster, position) {
			monster.audioProperties.position = position;
			console.log("calling monster @" + monster.audioProperties.position);
			thisSoundManager.playAudio(monster, 0);
			
			return;
		}
		
		callMonster(monster, [-1.0, 0, 0.9]);
		
		setTimeout(function() {
			callMonster(monster, [-1.0, 0, 0.5]);
		}, 4500);
		
		setTimeout(function() {
			callMonster(monster, [-1.0, 0, 0.0]);
		}, 9000);
		
		setTimeout(function() {
			callMonster(monster, [-1.0, 0, -0.5]);
		}, 13500);
		
		setTimeout(function() {
			callMonster(monster, [1.0, 0, 0.9]);
		}, 18000);
		
		setTimeout(function() {
			callMonster(monster, [1.0, 0, 0.5]);
		}, 22500);
		
		setTimeout(function() {
			callMonster(monster, [1.0, 0, 0.0]);
		}, 27000);
		
		setTimeout(function() {
			callMonster(monster, [1.0, 0, -0.5]);
		}, 31500);
		
		setTimeout(function() {
			callMonster(monster, [0.0, 0, 0.9]);
		}, 36000);
		
		setTimeout(function() {
			callMonster(monster, [0.0, 0, 0.5]);
		}, 40500);
		
		setTimeout(function() {
			callMonster(monster, [0.0, 0, 0]);
		}, 45000);
		
		setTimeout(function() {
			callMonster(monster, [0.0, 0, -0.5]);
		}, 49500);
		
		return;
	}

	return new SoundManager();
})();
