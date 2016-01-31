Engine.prototype.SoundManager = (function() {
	function SoundManager() {
		this.audioElement = [];
		this.panner = [];
		
		var i;
		for(i = 0; i < 6; i++) {
			this.audioElement[i] = document.createElement("audio");
			this.panner[i] = this.createPanner(this.audioElement[i]);
		}
		
		console.log("SoundManager loaded");
		console.log(this);
		
		//comment this.text() for production!
		this.test();
		
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
	
	SoundManager.prototype.playAudio = function(source, audioProperties) {
		var audioIndex = this.getFreeAudioElementIndex();
		
		if(audioIndex >= 0) {
			this.audioElement[audioIndex].src = source;
			this.audioElement[audioIndex].volume = audioProperties.volume;
			this.movePanner(audioIndex, audioProperties.position);
console.log("Attempting to play");
console.log(this.audioElement[audioIndex]);
			this.audioElement[audioIndex].play();
		}
		return;
	}
	
	SoundManager.prototype.movePanner = function(audioIndex, position) {
		this.panner[audioIndex].pan.value = 0.0;//position[0];
		//this.audioElement[audioIndex].volume = 1 + (position[2] > 0 ? -position[2] : position[2]);
		
		return;
	}
	
	SoundManager.prototype.test = function() {
		//test whatever you want here =)
		
		var monster = {
			audioProperties: {
				source: ["assets/monster.wav"],
				volume: 1.0,
				position: [0,0,0]
			}
		}
		
		var i,
			startTime = new Date().getTime(),
			deltaTime = startTime,
			currentTime = startTime;
		while((currentTime - startTime) < 25000) {
			if((currentTime - deltaTime) >= 3000) {
				monster.audioProperties.position = [-1 + (i % 3), 0, 0];
				this.playAudio(monster.audioProperties.source[0], monster.audioProperties);
				deltaTime = currentTime;
			}
			
			currentTime = new Date().getTime();
		}
		
		return;
	}

	return new SoundManager();
})();
