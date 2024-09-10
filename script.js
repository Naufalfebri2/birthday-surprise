function showMessage() {
  var message = document.getElementById("birthdayMessage");
  message.style.display = "block";

  // Animasi fade-in
  setTimeout(function () {
    message.style.opacity = "1";
  }, 100);

  // Menampilkan kembang api, bunga, dan bintang-bintang
  createFireworks();
  createFlowers();
  createStars(); // Tambahkan fungsi ini
}

function createFireworks() {
  const container = document.getElementById("fireworks");
  for (let i = 0; i < 20; i++) {
    let firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.backgroundColor = getRandomColor();
    firework.style.animationDelay = `${Math.random() * 2}s`;
    firework.style.animationDuration = `${2 + Math.random() * 2}s`;
    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 4000);
  }
}

function createFlowers() {
  const container = document.getElementById("flowers");
  for (let i = 0; i < 15; i++) {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${3 + Math.random() * 3}s`;
    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}

function createStars() {
  const container = document.getElementById("fireworks");
  for (let i = 0; i < 25; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    star.style.animationDuration = `${2 + Math.random() * 2}s`;
    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000);
  }
}

function getRandomColor() {
  const colors = [
    "#ff69b4",
    "#ffd700",
    "#ff4500",
    "#00ffff",
    "#7fff00",
    "#ff1493",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
