Engine.prototype.SoundManager = (function() {
	function SoundManager() {
		console.log("SoundManager loaded");

		this.audioElement = document.createElement("audio");
		//comment this.text() for production!
		this.test();

		return;
	}

	SoundManager.prototype.playAudio = function(source, audioProperties) {
		this.audioElement.src = source;
		this.audioElement.volume = audioProperties.volume;
		//this.audioElement.other_properties = audioProperties.other_properties;

		return this.audioElement.play();
	}

	SoundManager.prototype.loadSoundLibrary = function(soundArray){
		this.soundLibrary = soundArray;
		
		return;
	}

	SoundManager.prototype.test = function() {
		//test whatever you want here =)
		var monster = {
			audioProperties: {
				source: [this.soundLibrary[5]],
				volume: 1
			}
		}

		this.playAudio(monster.audioProperties.source[0], monster.audioProperties);

		return;
	}

	return new SoundManager();
})();
