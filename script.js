// Elements
const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const loginError = document.getElementById('loginError');
const toNotesBtn = document.getElementById('toNotesBtn');

// Musik
const music = document.getElementById('myMusic');
const musicBtn = document.getElementById('musicBtn');

// Notes
const heartBtn = document.getElementById('heartBtn');

// Photos
const photos = document.querySelectorAll('.photos img');

// ----- Login -----
loginBtn.addEventListener('click', () => {
  const pw = passwordInput.value.trim().toLowerCase();
  if(pw === 'sayangkuuu'){
    part1.classList.remove('active');
    part2.classList.add('active');
    playMusic();       // Musik langsung start
    showPhotos();
  } else {
    loginError.textContent = 'Ups,salah 😢';
  }
});

// ----- Musik -----
function playMusic(){
  music.play().catch(()=>{}); // Browser mungkin butuh interaksi
  musicBtn.textContent = 'Pause Musik 🎵';
}

musicBtn.addEventListener('click', () => {
  if(music.paused){ music.play(); musicBtn.textContent='Pause Musik 🎵'; }
  else { music.pause(); musicBtn.textContent='Play Musik 🎵'; }
});

// ----- Heart button -----
heartBtn.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.textContent = '💖';
  document.body.appendChild(heart);
  setTimeout(()=>{heart.remove()}, 1000);
});

// ----- Scroll / Part navigation -----
toNotesBtn.addEventListener('click', () => {
  part2.classList.remove('active');
  part3.classList.add('active');
  scrollToPart(part3);
});

function scrollToPart(part){
  part.scrollIntoView({behavior:'smooth'});
}

// ----- Foto muncul bergantian -----
function showPhotos(){
  photos.forEach((photo, i) => {
    setTimeout(()=>{photo.classList.add('visible');}, i*300);
  });
}
// Mawar muncul setelah notes aktif
const roseImg = document.getElementById('roseImg');

part3.addEventListener('transitionend', () => {
  roseImg.style.opacity = 1;
});

// ----- Inisialisasi -----
part1.classList.add('active');
