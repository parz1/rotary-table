export class SoundManager {
  constructor(cjsSound, sounds) {
    this.CJSSound = cjsSound
    this.sounds = sounds
  }

  play(sound) {
    this.CJSSound.play(sound)
  }

  load() {
    this.CJSSound.alternateExtensions = ['ogg', 'wav', 'mp3']
    for (let key in this.sounds) {
      this.CJSSound.registerSound(this.sounds[key], key)
    }
  }
}
