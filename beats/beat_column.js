import Beat from './beat.js';
class BeatColumn {
  constructor(col) {
    this.col = col;
    this.canvas = document.getElementById(`${this.col}`);
    this.ctx = this.canvas.getContext("2d");
    this.beats = [];
    this.addBeat = this.addBeat.bind(this);
    this.drawBeats = this.drawBeats.bind(this);
    this.removeBeats = this.removeBeats.bind(this);
    this.handleScoring = this.handleScoring.bind(this);
    this.handleMissedBeats = this.handleMissedBeats.bind(this);
  }

  addBeat() {
    const beat = new Beat(this.col);
    this.beats.push(beat);
  }

  drawBeats(comboCounter, speed) {
    let missedBeatScore = {combo: comboCounter};
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.save();
    if (this.beats.length > 0) {
      if (this.beats[0].posY > this.canvas.height) {
        missedBeatScore = this.handleMissedBeats(comboCounter);
      }
      this.beats.forEach( (beat) => {
        beat.posY += speed;
        beat.drawBeat();
      });
    }
    return missedBeatScore;
  }
  handleMissedBeats(comboCounter) {
      let scoring = {beatPoints: 0, combo: comboCounter};
      let hitResult = this.handleScoring(this.beats[0], comboCounter);
      scoring.beatPoints += hitResult.points;
      hitResult.success === false ? scoring.combo = 0 : scoring.combo ++;
      this.beats.splice(0, 1);
      // console.log(scoring.combo);
      return scoring;
  }

  removeBeats(comboCounter) {
    let scoring = {beatPoints: 0, combo: comboCounter};
    let pastBeats = 0;
    if (this.beats.length > 0) {
      this.beats.forEach( (beat, idx) => {
        if (beat.posY >= this.canvas.height * .75 - this.canvas.height * .08 ) {
          pastBeats ++;
          let hitResult = this.handleScoring(beat, comboCounter);
          scoring.beatPoints += hitResult.points;
          hitResult.success === false ? scoring.combo = 0 : scoring.combo ++;
        }
      });
    }
    this.beats.splice(0, pastBeats);
    return scoring;
  }


  handleScoring(beat, combo) {
    let hitResult = { points: null, success: true };
    if (beat.awesomeScore()) {
      // console.log("AWESOME!");
      combo === 0 ? hitResult.points = 10:
      hitResult.points = 10 * combo;
    }
    else if (beat.greatScore()) {
      // console.log("Great!");
      combo === 0 ? hitResult.points = 10:
      hitResult.points = 5 * combo;
    }
    else {
      // console.log("Miss");
      hitResult.points = 0;
      hitResult.success = false;
    }
    return hitResult;
  }
}

export default BeatColumn;
