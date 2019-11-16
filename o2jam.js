import Beat from './beats/beat.js';
import BeatColumn from './beats/beat_column.js';
import * as Song from './songs/songs.js';
import BeatMap from './beats/beatmap.js';
import SongList from './songs/song_list.js';
import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {

    let game = new Game();
    game.drawBorder();

    document.addEventListener("click", (event) => {
      if (event.target.type === "button") {
        game.closeModal('intro-modal');
        let songChoice = event.target.name;
        let BMDifficulty = event.target.value;
        let currentSong = SongList[songChoice];
        // let currentBeatMap = new BeatMap(
        //   currentSong[BMDifficulty].notes[0].slice(0),
        //   currentSong[BMDifficulty].notes[1].slice(0),
        //   currentSong[BMDifficulty].notes[2].slice(0),
        //   currentSong[BMDifficulty].notes[3].slice(0),
        //   currentSong[BMDifficulty].speed);
        let beatMapEndTime = currentSong["endTime"];
        game.playCurrentSong(songChoice, BMDifficulty);
        let audio = document.querySelector(`#${songChoice}`);
        audio.onended = function() {
          game.openModal('score-modal');
        };


      }
    });


});
