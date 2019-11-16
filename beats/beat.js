class Beat {
  constructor(col) {
    this.col = col;
    this.inTimingBar = false;
    this.hit = false;
    this.canvas = document.getElementById(`${this.col}`);
    this.ctx = this.canvas.getContext("2d");
    this.posX = 0;
    this.posY = - this.canvas.height * .08;
    this.drawBeat = this.drawBeat.bind(this);
    this.awesomeScore = this.awesomeScore.bind(this);
    this.greatScore = this.greatScore.bind(this);
  }

  drawBeat() {
    this.col > 0 && this.col < 3 ?
    this.ctx.fillStyle = 'rgba(0, 210, 255, .7)':
    this.ctx.fillStyle = 'rgba(155, 255, 0, .7 )';
    this.ctx.strokeStyle = 'black';

    this.col === 0 ? this.ctx.fillRect(this.canvas.width * .25 * this.col, this.posY, this.canvas.width * .25, this.canvas.height * .08) :
    this.ctx.fillRect(this.canvas.width * .25 * this.col + 5, this.posY, this.canvas.width * .25 - 5, this.canvas.height * .08);

    this.col === 0 ? this.ctx.strokeRect(this.canvas.width * .25 * this.col, this.posY, this.canvas.width * .25, this.canvas.height * .08) :
    this.ctx.strokeRect(this.canvas.width * .25 * this.col + 5, this.posY, this.canvas.width * .25 - 5, this.canvas.height * .08);
  }

  awesomeScore() {
    return this.posY >= this.canvas.height * .71 && this.posY <= this.canvas.height * .81;
  }
  greatScore() {
    return this.posY >= this.canvas.height * .69 && this.posY <= this.canvas.height * .83;
  }
}

export default Beat;
