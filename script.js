// Login
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const loginError = document.getElementById('loginError');
const loginPage = document.getElementById('loginPage');
const mainPage = document.getElementById('mainPage');

loginBtn.addEventListener('click', () => {
  const password = passwordInput.value.trim().toLowerCase();
  if(password === 'sayangkuuu'){
    loginPage.style.display = 'none';
    mainPage.style.display = 'block';
    playMusic();
  } else {
    loginError.textContent = 'Ups, kata rahasia salah 😢';
  }
});

// Musik
const music = document.getElementById('myMusic');
const musicBtn = document.getElementById('musicBtn');

function playMusic() {
  music.play();
}

musicBtn.addEventListener('click', () => {
  if(music.paused){
    music.play();
    musicBtn.textContent = 'Pause';
  } else {
    music.pause();
    musicBtn.textContent = 'Play';
  }
});

// Heart button
const heartBtn = document.getElementById('heartBtn');
heartBtn.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.textContent = '💖';
  document.body.appendChild(heart);
  setTimeout(() => {heart.remove();}, 1000);
});
