// ================== Navbar Toggle (Hamburger) ==================

// Ambil elemen menu toggle dan navbar
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Event listener untuk membuka/tutup menu navbar saat tombol hamburger ditekan
menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active'); // Toggle visibility menu
});

// Mendapatkan elemen audio, tombol play/pause, dan elemen waktu
const playPauseBtn = document.getElementById('playPauseBtn');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const progress = document.getElementById('progress');
let audio; // Declare the audio variable


function playAudio(audioId) {
  // Dapatkan audio element berdasarkan ID
  var audio = document.getElementById(audioId);
  
  // Dapatkan semua elemen audio
  var audios = document.querySelectorAll('audio');
  
  // Jika audio sedang diputar, hentikan audio lainnya
  audios.forEach(function(otherAudio) {
    if (otherAudio !== audio) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
    }
  });

  // Jika audio belum diputar, mulai memutar
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();  // Jika sudah diputar, stop audio
  }
}
