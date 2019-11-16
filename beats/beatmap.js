import Beat from './beat.js';
import BeatColumn from './beat_column.js';

class BeatMap {
  constructor(notes0, notes1, notes2, notes3, speed) {
    // this.time = 0;
    this.startTime = 0;
    this.currentTime = 0;
    //notes are arrays with time integers (in ms) to see when it needs to be added to respective BeatColumn
    this.notes = {
      0: notes0.slice(0),
      1: notes1.slice(0),
      2: notes2.slice(0),
      3: notes3.slice(0),
    };

    this.cols = {
      0: new BeatColumn(0),
      1: new BeatColumn(1),
      2: new BeatColumn(2),
      3: new BeatColumn(3),
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
      3: [],
    };
  }
  addNotes(colNum) {
    if(this.notes[colNum][0] <= this.currentTime - this.startTime) {
      this.cols[colNum].addBeat(colNum);
      this.notes[colNum].shift();
    }
  }

  drawBeatMap() {
      let missedNotes0 = this.cols[0].drawBeats(this.comboCounter, this.speed);
      let missedNotes1 =this.cols[1].drawBeats(this.comboCounter, this.speed);
      let missedNotes2 =this.cols[2].drawBeats(this.comboCounter, this.speed);
      let missedNotes3 =this.cols[3].drawBeats(this.comboCounter, this.speed);
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

  displayScore() {
    this.ctx.clearRect(0,0,this.scoreCanvas.width, this.scoreCanvas.height);
    this.ctx.font = '20px Roboto';
    this.ctx.fillText(`Score`, this.scoreCanvas.width * .03, this.scoreCanvas.height * .2);
    this.ctx.fillText(`${this.score}`, this.scoreCanvas.width * .03, this.scoreCanvas.height * .25);

    this.ctx.fillText(`Combo`, this.scoreCanvas.width * .03, this.scoreCanvas.height * .4);
    this.ctx.fillText(`${this.comboCounter}`, this.scoreCanvas.width * .03, this.scoreCanvas.height * .45);
  }
  keyHit(colNum) {
    let hitResult = this.cols[colNum].removeBeats(this.comboCounter);
    this.score += hitResult.beatPoints;
    this.comboCounter = hitResult.combo;
    // this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime)/10)*10 - (380 * this.speed));

    this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime)/10)*10 - (380 * 3) - 80 );
    // + 400
    //BEATLOGGER, DO NOT DELETE!!!
    // console.log(this.beatLogger);
    //BEATLOGGER, DO NOT DELETE!!!
  }
}

export default BeatMap;
