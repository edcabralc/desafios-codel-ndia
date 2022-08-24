const heart = document.querySelectorAll("[data-icon='icon']");

const clickHeart = (e) => e.target.classList.toggle("activate");
heart.forEach((icon) => icon.addEventListener("click", clickHeart));
