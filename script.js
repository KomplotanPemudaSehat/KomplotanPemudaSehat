// Mendapatkan elemen
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

// Menambahkan event listener untuk menu toggle
menuToggle.addEventListener("click", () => {
  // Menambahkan/removing kelas 'active' untuk navbar
  navList.classList.toggle("active");
});

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
  