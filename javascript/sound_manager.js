Engine.prototype.SoundManager = (function() {
	function SoundManager() {
		var AudioContext = window.AudioContext || window.webkitAudioContext;
		var audioCtx = new AudioContext();

		var panner = audioCtx.createPanner();
		panner.setPosition(0,0,0);

		var listener = audioCtx.listener();
		listener.setPosition(0,0,0);
		listener.setOrientation(0,0,-1);

		console.log("SoundManager loaded");
		this.audioElement = document.createElement("audio");

		this.bufferLoader = this.loadBuffer();
		//comment this.text() for production!
		this.test();

		return;
	}

	SoundManager.prototype.playAudio = function(audioProperties) {
		this.audioElement.src = audioProperties.source;
		this.audioElement.volume = audioProperties.volume;
		panner.setPosition(this)
		//this.audioElement.other_properties = audioProperties.other_properties;

		return this.audioElement.play();
	}

	SoundManager.prototype.loadBuffer = function(){
		var bufferLoader =  [
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

		return bufferLoader;
	}


	SoundManager.prototype.movePanner(position) {
		panner.setPosition(position[0], position[1], position[2]);
	}
	SoundManager.prototype.test = function() {
		//test whatever you want here =)

		//WARNING: actual game object code is subject to change and defined in game logic
		/*var coin = {
			//position: [0, 0, 0],
			//ObjectType: "coin",
			//...
			audioProperties: {
				source: this.bufferLoader[8],
				volume: 0.4
			}
		}*/

		var monster = {
			location: [0,0,0]
			audioProperties: {
				source: this.bufferLoader[5],
				volume: 1
			}
		}


		//this.playAudio(coin.audioProperties);
		this.playAudio(monster.audioProperties);

		return;
	}

	return new SoundManager();
})();
