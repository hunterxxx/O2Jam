import Beat from './beats/beat.js';
import BeatColumn from './beats/beat_column.js';
import * as Song from './songs/songs.js';
import BeatMap from './beats/beatmap.js';
import SongList from './songs/song_list.js';


class Game {
  constructor() {
    this.canvas = document.getElementById('board');
    this.ctx = this.canvas.getContext('2d');
    this.firedKeys = {
      f: false,
      g: false,
      h: false,
      j: false,
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
    this.ctx.fillStyle = 'rgba(255, 215, 0, .6)';
    let timingBar = this.ctx.fillRect(0, this.canvas.height * .75, this.canvas.width, this.canvas.height * .1);
    this.ctx.fillStyle = 'black';
    for (let x = this.canvas.width / 4; x < this.canvas.width; x += this.canvas.width / 4) {
      this.ctx.fillRect(x, 0, 5, 700);
      this.ctx.font = '20px serif';
      this.ctx.fillText('F', this.canvas.width * .11, this.canvas.height * .81);
      this.ctx.fillText('G', this.canvas.width * .36, this.canvas.height * .81);
      this.ctx.fillText('H', this.canvas.width * .61, this.canvas.height * .81);
      this.ctx.fillText('J', this.canvas.width * .86, this.canvas.height * .81);
    }
  }

  resetGame() {
    if ( event.keyCode === 13) {
      const scoreCanvas = document.getElementById("outer-canvas");
      const ctx = scoreCanvas.getContext("2d");
      ctx.clearRect(0,0,scoreCanvas.width, scoreCanvas.height);
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
      // let score = document.createElement("p");
      // score.setAttribute("id", "score");
      // let textnode = document.createTextNode(`Final Score: ${this.beatMap.score}`);
      // score.appendChild(textnode);
      // modal.insertBefore(score, modal.children[1]);
      document.addEventListener('keydown', function() {
        if ( event.keyCode === 13) {
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
      this.ctx.fillRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
    }

  }

  keyUp(num, key) {
    this.firedKeys[key] = false;
    if(this.firedKeys["f"] === false && this.firedKeys["g"] === false && this.firedKeys["h"] === false && this.firedKeys["j"] === false) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBorder();
    }
    else {
      this.ctx.clearRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
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
    this.drawInterval = setInterval( () => {
      this.beatMap.addNotes(0);
      this.beatMap.addNotes(1);
      this.beatMap.addNotes(2);
      this.beatMap.addNotes(3);
      this.beatMap.drawBeatMap();
    }, 1);
    setTimeout( () => {
      Song.playSong(selectedSong.songTag);
      // let audio = document.querySelector(`#${selectedSong.songTag}`);
      // audio.onended = function() {
      //   this.openModal('score-modal');
      // }.bind(this);
      }, selectedSong.songOffset);
    window.addEventListener('keydown', function(event) {
      switch(event.keyCode) {
        case 70:
          this.keyHit(0, "f");
          this.beatMap.keyHit(0);
          break;
        case 71:
          this.keyHit(1, "g");
          this.beatMap.keyHit(1);
          break;
        case 72:
          this.keyHit(2, "h");
          this.beatMap.keyHit(2);
          break;
        case 74:
          this.keyHit(3, "j");
          this.beatMap.keyHit(3);
          break;
        default:
      }
    }.bind(this), false);

    window.addEventListener('keyup', function(event) {
      switch(event.keyCode) {
        case 70:
          this.keyUp(0, "f");
          break;
        case 71:
          this.keyUp(1, "g");
          break;
        case 72:
          this.keyUp(2, "h");
          break;
        case 74:
          this.keyUp(3, "j");
          break;
        default:
      }
    }.bind(this), false);
  }
}

export default Game;
