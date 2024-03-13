let currentIndex = 0;
let currentWidth = window.innerWidth;
let max_width = 780;

function showSlide(index) {
	const cardContainer = document.querySelector(".card-container");
	const cardWidth = document.querySelector(".card").offsetWidth;
	cardContainer.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
	if (currentWidth < max_width) {
		const totalSlides = document.querySelectorAll(".card").length / 1;
		currentIndex = (currentIndex + 1) % totalSlides;
		showSlide(currentIndex);
	} else if (currentWidth > max_width) {
		const totalSlides = document.querySelectorAll(".card").length / 1;
		currentIndex = (currentIndex + 3) % totalSlides;
		showSlide(currentIndex);
	}
}

function prevSlide() {
	if (currentWidth < max_width) {
		const totalSlides = document.querySelectorAll(".card").length / 1;
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		showSlide(currentIndex);
	} else if (currentWidth > max_width) {
		const totalSlides = document.querySelectorAll(".card").length / 1;
		currentIndex = (currentIndex - 3 + totalSlides) % totalSlides;
		showSlide(currentIndex);
	}
}
