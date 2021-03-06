/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beat = function () {
  function Beat(col) {
    _classCallCheck(this, Beat);

    this.col = col;
    this.inTimingBar = false;
    this.hit = false;
    this.canvas = document.getElementById('' + this.col);
    this.ctx = this.canvas.getContext("2d");
    this.posX = 0;
    this.posY = -this.canvas.height * .08;
    this.drawBeat = this.drawBeat.bind(this);
    this.awesomeScore = this.awesomeScore.bind(this);
    this.greatScore = this.greatScore.bind(this);
  }

  _createClass(Beat, [{
    key: 'drawBeat',
    value: function drawBeat() {
      this.col > 0 && this.col < 3 ? this.ctx.fillStyle = 'rgba(0, 210, 255, .7)' : this.ctx.fillStyle = 'rgba(155, 255, 0, .7 )';
      this.ctx.strokeStyle = 'black';

      this.col === 0 ? this.ctx.fillRect(this.canvas.width * .25 * this.col, this.posY, this.canvas.width * .25, this.canvas.height * .08) : this.ctx.fillRect(this.canvas.width * .25 * this.col + 5, this.posY, this.canvas.width * .25 - 5, this.canvas.height * .08);

      this.col === 0 ? this.ctx.strokeRect(this.canvas.width * .25 * this.col, this.posY, this.canvas.width * .25, this.canvas.height * .08) : this.ctx.strokeRect(this.canvas.width * .25 * this.col + 5, this.posY, this.canvas.width * .25 - 5, this.canvas.height * .08);
    }
  }, {
    key: 'awesomeScore',
    value: function awesomeScore() {
      return this.posY >= this.canvas.height * .71 && this.posY <= this.canvas.height * .81;
    }
  }, {
    key: 'greatScore',
    value: function greatScore() {
      return this.posY >= this.canvas.height * .69 && this.posY <= this.canvas.height * .83;
    }
  }]);

  return Beat;
}();

exports.default = Beat;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeatMap = function () {
  function BeatMap(notes0, notes1, notes2, notes3, speed) {
    _classCallCheck(this, BeatMap);

    // this.time = 0;
    this.startTime = 0;
    this.currentTime = 0;
    //notes are arrays with time integers (in ms) to see when it needs to be added to respective BeatColumn
    this.notes = {
      0: notes0.slice(0),
      1: notes1.slice(0),
      2: notes2.slice(0),
      3: notes3.slice(0)
    };

    this.cols = {
      0: new _beat_column2.default(0),
      1: new _beat_column2.default(1),
      2: new _beat_column2.default(2),
      3: new _beat_column2.default(3)
    };
    this.score = 0;
    this.comboCounter = 0;
    this.speed = speed;
    this.addNotes = this.addNotes.bind(this);
    this.keyHit = this.keyHit.bind(this);
    this.displayScore = this.displayScore.bind(this);
    this.scoreCanvas = document.getElementById("outer-canvas");
    this.ctx = this.scoreCanvas.getContext("2d");

    //ONLY TO BEATMAP
    this.beatLogger = {
      0: [],
      1: [],
      2: [],
      3: []
    };
  }

  _createClass(BeatMap, [{
    key: 'addNotes',
    value: function addNotes(colNum) {
      if (this.notes[colNum][0] <= this.currentTime - this.startTime) {
        this.cols[colNum].addBeat(colNum);
        this.notes[colNum].shift();
      }
    }
  }, {
    key: 'drawBeatMap',
    value: function drawBeatMap() {
      var missedNotes0 = this.cols[0].drawBeats(this.comboCounter, this.speed);
      var missedNotes1 = this.cols[1].drawBeats(this.comboCounter, this.speed);
      var missedNotes2 = this.cols[2].drawBeats(this.comboCounter, this.speed);
      var missedNotes3 = this.cols[3].drawBeats(this.comboCounter, this.speed);
      // this.comboCounter = missedNotes0.combo;
      // this.comboCounter = missedNotes1.combo;
      // this.comboCounter = missedNotes2.combo;
      // this.comboCounter = missedNotes3.combo;
      if (missedNotes0.combo === 0 || missedNotes1.combo === 0 || missedNotes2.combo === 0 || missedNotes3.combo === 0) {
        this.comboCounter = 0;
      }
      this.currentTime = new Date().getTime();
      this.displayScore();
    }
  }, {
    key: 'displayScore',
    value: function displayScore() {
      this.ctx.clearRect(0, 0, this.scoreCanvas.width, this.scoreCanvas.height);
      this.ctx.font = '20px Roboto';
      this.ctx.fillText('Score', this.scoreCanvas.width * .03, this.scoreCanvas.height * .2);
      this.ctx.fillText('' + this.score, this.scoreCanvas.width * .03, this.scoreCanvas.height * .25);

      this.ctx.fillText('Combo', this.scoreCanvas.width * .03, this.scoreCanvas.height * .4);
      this.ctx.fillText('' + this.comboCounter, this.scoreCanvas.width * .03, this.scoreCanvas.height * .45);
    }
  }, {
    key: 'keyHit',
    value: function keyHit(colNum) {
      var hitResult = this.cols[colNum].removeBeats(this.comboCounter);
      this.score += hitResult.beatPoints;
      this.comboCounter = hitResult.combo;
      // this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime)/10)*10 - (380 * this.speed));

      this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime) / 10) * 10 - 380 * 3 - 80);
      // + 400
      //BEATLOGGER, DO NOT DELETE!!!
      // console.log(this.beatLogger);
      //BEATLOGGER, DO NOT DELETE!!!
    }
  }]);

  return BeatMap;
}();

exports.default = BeatMap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeatColumn = function () {
  function BeatColumn(col) {
    _classCallCheck(this, BeatColumn);

    this.col = col;
    this.canvas = document.getElementById("" + this.col);
    this.ctx = this.canvas.getContext("2d");
    this.beats = [];
    this.addBeat = this.addBeat.bind(this);
    this.drawBeats = this.drawBeats.bind(this);
    this.removeBeats = this.removeBeats.bind(this);
    this.handleScoring = this.handleScoring.bind(this);
    this.handleMissedBeats = this.handleMissedBeats.bind(this);
  }

  _createClass(BeatColumn, [{
    key: "addBeat",
    value: function addBeat() {
      var beat = new _beat2.default(this.col);
      this.beats.push(beat);
    }
  }, {
    key: "drawBeats",
    value: function drawBeats(comboCounter, speed) {
      var missedBeatScore = { combo: comboCounter };
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // this.ctx.save();
      if (this.beats.length > 0) {
        if (this.beats[0].posY > this.canvas.height) {
          missedBeatScore = this.handleMissedBeats(comboCounter);
        }
        this.beats.forEach(function (beat) {
          beat.posY += speed;
          beat.drawBeat();
        });
      }
      return missedBeatScore;
    }
  }, {
    key: "handleMissedBeats",
    value: function handleMissedBeats(comboCounter) {
      var scoring = { beatPoints: 0, combo: comboCounter };
      var hitResult = this.handleScoring(this.beats[0], comboCounter);
      scoring.beatPoints += hitResult.points;
      hitResult.success === false ? scoring.combo = 0 : scoring.combo++;
      this.beats.splice(0, 1);
      // console.log(scoring.combo);
      return scoring;
    }
  }, {
    key: "removeBeats",
    value: function removeBeats(comboCounter) {
      var _this = this;

      var scoring = { beatPoints: 0, combo: comboCounter };
      var pastBeats = 0;
      if (this.beats.length > 0) {
        this.beats.forEach(function (beat, idx) {
          if (beat.posY >= _this.canvas.height * .75 - _this.canvas.height * .08) {
            pastBeats++;
            var hitResult = _this.handleScoring(beat, comboCounter);
            scoring.beatPoints += hitResult.points;
            hitResult.success === false ? scoring.combo = 0 : scoring.combo++;
          }
        });
      }
      this.beats.splice(0, pastBeats);
      return scoring;
    }
  }, {
    key: "handleScoring",
    value: function handleScoring(beat, combo) {
      var hitResult = { points: null, success: true };
      if (beat.awesomeScore()) {
        // console.log("AWESOME!");
        combo === 0 ? hitResult.points = 10 : hitResult.points = 10 * combo;
      } else if (beat.greatScore()) {
        // console.log("Great!");
        combo === 0 ? hitResult.points = 10 : hitResult.points = 5 * combo;
      } else {
        // console.log("Miss");
        hitResult.points = 0;
        hitResult.success = false;
      }
      return hitResult;
    }
  }]);

  return BeatColumn;
}();

exports.default = BeatColumn;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playSong = playSong;
exports.pauseSong = pauseSong;
exports.stopSong = stopSong;
exports.resetSong = resetSong;
function playSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.play();
  //start notes
}

function pauseSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.pause();
}

function stopSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.pause();
  song.currentTime = 0;
}

function resetSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.pause();
  song.currentTime = 0;
  song.play();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _christmas = __webpack_require__(9);

var _christmas2 = _interopRequireDefault(_christmas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongList = {
  christmas: _christmas2.default
};

exports.default = SongList;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

var _songs = __webpack_require__(3);

var Song = _interopRequireWildcard(_songs);

var _beatmap = __webpack_require__(1);

var _beatmap2 = _interopRequireDefault(_beatmap);

var _song_list = __webpack_require__(4);

var _song_list2 = _interopRequireDefault(_song_list);

var _game = __webpack_require__(8);

var _game2 = _interopRequireDefault(_game);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

  var game = new _game2.default();
  game.drawBorder();

  document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
      game.closeModal('intro-modal');
      var songChoice = event.target.name;
      var BMDifficulty = event.target.value;
      var currentSong = _song_list2.default[songChoice];
      // let currentBeatMap = new BeatMap(
      //   currentSong[BMDifficulty].notes[0].slice(0),
      //   currentSong[BMDifficulty].notes[1].slice(0),
      //   currentSong[BMDifficulty].notes[2].slice(0),
      //   currentSong[BMDifficulty].notes[3].slice(0),
      //   currentSong[BMDifficulty].speed);
      var beatMapEndTime = currentSong["endTime"];
      game.playCurrentSong(songChoice, BMDifficulty);
      var audio = document.querySelector('#' + songChoice);
      audio.onended = function () {
        game.openModal('score-modal');
      };
    }
  });
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _songs = __webpack_require__(3);

var Song = _interopRequireWildcard(_songs);

var _beatmap = __webpack_require__(1);

var _beatmap2 = _interopRequireDefault(_beatmap);

var _song_list = __webpack_require__(4);

var _song_list2 = _interopRequireDefault(_song_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('board');
    this.ctx = this.canvas.getContext('2d');
    this.origShadowColor = this.ctx.shadowColor;
    this.firedKeys = {
      d: false,
      f: false,
      j: false,
      k: false
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

  _createClass(Game, [{
    key: 'drawBorder',
    value: function drawBorder() {
      this.ctx.fillStyle = '#26b2e0';
      var timingBar1 = this.ctx.fillRect(0, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      var timingBar4 = this.ctx.fillRect(this.canvas.width * .50, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      this.ctx.fillStyle = 'grey';
      var timingBar2 = this.ctx.fillRect(this.canvas.width * .25, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      var timingBar3 = this.ctx.fillRect(this.canvas.width * .75, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);

      this.ctx.fillStyle = 'black';
      for (var x = this.canvas.width / 4; x < this.canvas.width; x += this.canvas.width / 4) {
        this.ctx.fillRect(x, 0, 5, 700);
        this.ctx.font = '20px serif';
        this.ctx.fillText('D', this.canvas.width * .11, this.canvas.height * .81);
        this.ctx.fillText('F', this.canvas.width * .36, this.canvas.height * .81);
        this.ctx.fillText('J', this.canvas.width * .61, this.canvas.height * .81);
        this.ctx.fillText('K', this.canvas.width * .86, this.canvas.height * .81);
      }
    }
  }, {
    key: 'resetGame',
    value: function resetGame() {
      if (event.keyCode === 13) {
        var scoreCanvas = document.getElementById("outer-canvas");
        var ctx = scoreCanvas.getContext("2d");
        ctx.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);
        this.closeModal('score-modal');
        this.openModal('intro-modal');
        var scoreP = document.getElementById("score-p");
        scoreP.innerHTML = '';
        clearInterval(this.drawInterval);
        document.removeEventListener('keydown', this.resetGame, false);
      }
    }
  }, {
    key: 'closeModal',
    value: function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      var modalContainer = document.getElementById('modal-container');
      modalContainer.className = 'hidden';
      modal.className = 'hidden';
    }
  }, {
    key: 'openModal',
    value: function openModal(modalId) {
      event.preventDefault();
      var modal = document.getElementById(modalId);
      var modalContainer = document.getElementById('modal-container');
      modalContainer.className = 'modal-container';
      modal.className = 'modal';
      if (modalId === 'score-modal') {
        var scoreP = document.getElementById("score-p");
        scoreP.innerHTML = 'Score: ' + this.beatMap.score;
        document.addEventListener('keydown', function () {
          if (event.keyCode === 13) {
            this.resetGame();
          }
        }.bind(this), false);
      }
    }
  }, {
    key: 'keyHit',
    value: function keyHit(num, key) {
      if (this.firedKeys[key] === false) {
        this.firedKeys[key] = true;
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.fillStyle = 'rgba(0, 0, 255, .6)';

        this.ctx.shadowColor = 'grey';
        this.ctx.shadowBlur = 100;
        this.ctx.fillRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      }
    }
  }, {
    key: 'keyUp',
    value: function keyUp(num, key) {
      this.firedKeys[key] = false;
      if (this.firedKeys["d"] === false && this.firedKeys["f"] === false && this.firedKeys["j"] === false && this.firedKeys["k"] === false) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.shadowColor = this.origShadowColor;

        this.drawBorder();
      } else {
        this.ctx.clearRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
        this.ctx.shadowColor = this.origShadowColor;

        this.drawBorder();
      }
    }
  }, {
    key: 'playCurrentSong',
    value: function playCurrentSong(songTag, difficulty) {
      var _this = this;

      var selectedSong = _song_list2.default[songTag];
      this.beatMap = new _beatmap2.default(selectedSong[difficulty].notes[0].slice(0), selectedSong[difficulty].notes[1].slice(0), selectedSong[difficulty].notes[2].slice(0), selectedSong[difficulty].notes[3].slice(0), selectedSong[difficulty].speed);
      this.beatMap.startTime = new Date().getTime();
      this.beatMap.currentTime = new Date().getTime();
      this.drawInterval = setInterval(function () {
        _this.beatMap.addNotes(0);
        _this.beatMap.addNotes(1);
        _this.beatMap.addNotes(2);
        _this.beatMap.addNotes(3);
        _this.beatMap.drawBeatMap();
      }, 1);
      setTimeout(function () {
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
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _beatmap = __webpack_require__(1);

var _beatmap2 = _interopRequireDefault(_beatmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var christmas0 = [2550, 3950, 7250, 7550, 7850, 17100];

var christmas1 = [1850, 3250, 4400, 4700, 5000, 10050, 10350, 10650];

var christmas2 = [1500, 2900, 4400, 4700, 5000, 10050, 10350, 10650];

var christmas3 = [2200, 3600, 7250, 7550, 7850];

var christmas = new _beatmap2.default(christmas0, christmas1, christmas2, christmas3, 2);

var music = {
  title: "Christmas Memories",
  songTag: "christmas",
  songOffset: 1000,
  easy: christmas,
  endTime: 10200
};

exports.default = music;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map