const rect = document.querySelector("aside")
const img = document.querySelector(".photo")
rect.addEventListener("click", photoVisible)
function photoVisible() {
img.style.display = 'flex';
}