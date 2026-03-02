let images = document.querySelectorAll('.gallery img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

/* FILTER FUNCTION */
function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

/* OPEN LIGHTBOX */
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

/* CLOSE ON ESC KEY */
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeLightbox();
});