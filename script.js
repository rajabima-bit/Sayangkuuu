// Part Elements
const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const loginError = document.getElementById('loginError');

// Musik
const music = document.getElementById('myMusic');
const musicBtn = document.getElementById('musicBtn');

// Notes
const heartBtn = document.getElementById('heartBtn');

// Foto galeri
const photos = document.querySelectorAll('.photos img');

// Login
loginBtn.addEventListener('click', () => {
  const pw = passwordInput.value.trim().toLowerCase();
  if(pw === 'sayangkuuu'){
    part1.classList.remove('active');
    part2.classList.add('active');
    playMusic();
    showPhotos();
    scrollToPart(part2);
  } else {
    loginError.textContent = 'Ups, Salahh';
  }
});

// Musik play/pause
function playMusic(){
  music.play().catch(()=>{}); // beberapa browser butuh interaksi
  musicBtn.textContent = 'Pause Musik 🎵';
}
musicBtn.addEventListener('click', () => {
  if(music.paused){ music.play(); musicBtn.textContent='Pause Musik 🎵'; }
  else { music.pause(); musicBtn.textContent='Play Musik 🎵'; }
});

// Heart button
heartBtn.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.textContent = '💖';
  document.body.appendChild(heart);
  setTimeout(()=>{heart.remove()}, 1000);
});

// Scroll to part
function scrollToPart(part){
  part.scrollIntoView({behavior:'smooth'});
  if(part === part2){
    setTimeout(()=>part3.classList.add('active'), 1500); // notes muncul setelah galeri
  }
}

// Foto muncul bergantian
function showPhotos(){
  photos.forEach((photo, i) => {
    setTimeout(()=>{photo.classList.add('visible');}, i*300);
  });
}

// Inisialisasi
part1.classList.add('active');
