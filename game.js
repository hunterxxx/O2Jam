import * as Song from './songs/songs.js';
import BeatMap from './beats/beatmap.js';
import SongList from './songs/song_list.js';


class Game {
  constructor() {
    this.canvas = document.getElementById('board');
    this.ctx = this.canvas.getContext('2d');
    this.origShadowColor = this.ctx.shadowColor;
    this.firedKeys = {
      d: false,
      f: false,
      j: false,
      k: false,
    };
    this.beatMap = null;
    this.drawBorder = this.drawBorder.bind(this);
    this.keyHit = this.keyHit.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.playCurrentSong = this.playCurrentSong.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.drawInterval = null;
  }
  drawBorder() {
    this.ctx.fillStyle = '#26b2e0';
    let timingBar1 = this.ctx.fillRect(0, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
    let timingBar4 = this.ctx.fillRect(this.canvas.width * .50, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
    this.ctx.fillStyle = 'grey';
    let timingBar2 = this.ctx.fillRect(this.canvas.width * .25, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
    let timingBar3 = this.ctx.fillRect(this.canvas.width * .75, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);

    this.ctx.fillStyle = 'black';
    for (let x = this.canvas.width / 4; x < this.canvas.width; x += this.canvas.width / 4) {
      this.ctx.fillRect(x, 0, 5, 700);
      this.ctx.font = '20px serif';
      this.ctx.fillText('D', this.canvas.width * .11, this.canvas.height * .81);
      this.ctx.fillText('F', this.canvas.width * .36, this.canvas.height * .81);
      this.ctx.fillText('J', this.canvas.width * .61, this.canvas.height * .81);
      this.ctx.fillText('K', this.canvas.width * .86, this.canvas.height * .81);
    }
  }

  resetGame() {
    if (event.keyCode === 13) {
      const scoreCanvas = document.getElementById("outer-canvas");
      const ctx = scoreCanvas.getContext("2d");
      ctx.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);
      this.closeModal('score-modal');
      this.openModal('intro-modal');
      let scoreP = document.getElementById("score-p");
      scoreP.innerHTML = ``;
      clearInterval(this.drawInterval);
      document.removeEventListener('keydown', this.resetGame, false);
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContainer = document.getElementById('modal-container');
    modalContainer.className = 'hidden';
    modal.className = 'hidden';
  }

  openModal(modalId) {
    event.preventDefault();
    const modal = document.getElementById(modalId);
    const modalContainer = document.getElementById('modal-container');
    modalContainer.className = 'modal-container';
    modal.className = 'modal';
    if (modalId === 'score-modal') {
      let scoreP = document.getElementById("score-p");
      scoreP.innerHTML = `Score: ${this.beatMap.score}`;
      document.addEventListener('keydown', function () {
        if (event.keyCode === 13) {
          this.resetGame();
        }
      }.bind(this), false);
    }
  }

  keyHit(num, key) {
    if (this.firedKeys[key] === false) {
      this.firedKeys[key] = true;
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.fillStyle = 'rgba(0, 0, 255, .6)';

      this.ctx.shadowColor = 'grey';
      this.ctx.shadowBlur = 100;
      this.ctx.fillRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);

    }
  }

  keyUp(num, key) {
    this.firedKeys[key] = false;
    if (this.firedKeys["d"] === false && this.firedKeys["f"] === false && this.firedKeys["j"] === false && this.firedKeys["k"] === false) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.shadowColor = this.origShadowColor;

      this.drawBorder();
    }
    else {
      this.ctx.clearRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      this.ctx.shadowColor = this.origShadowColor;

      this.drawBorder();

    }
  }

  playCurrentSong(songTag, difficulty) {
    let selectedSong = SongList[songTag];
    this.beatMap = new BeatMap(
      selectedSong[difficulty].notes[0].slice(0),
      selectedSong[difficulty].notes[1].slice(0),
      selectedSong[difficulty].notes[2].slice(0),
      selectedSong[difficulty].notes[3].slice(0),
      selectedSong[difficulty].speed);
    this.beatMap.startTime = new Date().getTime();
    this.beatMap.currentTime = new Date().getTime();
    this.drawInterval = setInterval(() => {
      this.beatMap.addNotes(0);
      this.beatMap.addNotes(1);
      this.beatMap.addNotes(2);
      this.beatMap.addNotes(3);
      this.beatMap.drawBeatMap();
    }, 1);
    setTimeout(() => {
      Song.playSong(selectedSong.songTag);
    }, selectedSong.songOffset);
    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 68:
          this.keyHit(0, "d");
          this.beatMap.keyHit(0);
          break;
        case 70:
          this.keyHit(1, "f");
          this.beatMap.keyHit(1);
          break;
        case 74:
          this.keyHit(2, "j");
          this.beatMap.keyHit(2);
          break;
        case 75:
          this.keyHit(3, "k");
          this.beatMap.keyHit(3);
          break;
        default:
      }
    }.bind(this), false);

    window.addEventListener('keyup', function (event) {
      switch (event.keyCode) {
        case 68:
          this.keyUp(0, "d");
          break;
        case 70:
          this.keyUp(1, "f");
          break;
        case 74:
          this.keyUp(2, "j");
          break;
        case 75:
          this.keyUp(3, "k");
          break;
        default:
      }
    }.bind(this), false);
  }
}

export default Game;
