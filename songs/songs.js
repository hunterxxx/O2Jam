export function playSong(songFile) {
  let song = document.getElementById(`${songFile}`);
  song.play();
  //start notes
}

export function pauseSong(songFile) {
  let song = document.getElementById(`${songFile}`);
    song.pause();
}

export function stopSong(songFile) {
  let song = document.getElementById(`${songFile}`);
  song.pause();
  song.currentTime = 0;
}

export function resetSong(songFile) {
  let song = document.getElementById(`${songFile}`);
  song.pause();
  song.currentTime = 0;
  song.play();
}
