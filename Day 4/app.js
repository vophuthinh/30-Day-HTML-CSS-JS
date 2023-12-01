var images = document.querySelectorAll(".wrapper .image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var galleryImage = document.querySelector(".gallery_inner img");
var gallery = document.querySelector(".gallery");

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    // Display gallery image
    galleryImage.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        showGallery();
    });
});

// Add event listeners for the prev and next buttons
prev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
});

next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
});

// Add event listener for the close button
close.addEventListener('click', function () {
    gallery.classList.remove('show');
});


