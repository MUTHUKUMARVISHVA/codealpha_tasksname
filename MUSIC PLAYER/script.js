const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    title: "Calm Down",
    artist: "Rema & Selena Gomez",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  }
];


let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("playBtn");

/* LOAD SONG */
function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
}

loadSong(songs[currentSong]);

/* PLAY / PAUSE */
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

/* NEXT SONG */
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  audio.play();
  playBtn.textContent = "⏸";
}

/* PREVIOUS SONG */
function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  audio.play();
  playBtn.textContent = "⏸";
}

/* UPDATE PROGRESS */
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
});

/* SET PROGRESS */
function setProgress(e) {
  const width = e.currentTarget.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
}

/* VOLUME CONTROL */
function setVolume(value) {
  audio.volume = value;
}

/* AUTO NEXT WHEN ENDED */
audio.addEventListener("ended", nextSong);