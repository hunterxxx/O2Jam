import BeatMap from '../../beats/beatmap.js';

const christmas0 = [2550, 3950, 7250, 7550, 7850, 17100,];

const christmas1 = [1850, 3250, 4400, 4700, 5000, 10050, 10350, 10650];

const christmas2 = [1500, 2900, 4400, 4700, 5000, 10050, 10350, 10650];

const christmas3 = [2200, 3600, 7250, 7550, 7850,];

const christmas = new BeatMap(christmas0, christmas1, christmas2, christmas3, 2);

const music = {
  title: "Christmas Memories",
  songTag: "christmas",
  songOffset: 1000,
  easy: christmas,
  endTime: 10200,
};

export default music;
