document.addEventListener("DOMContentLoaded", function () {
	let parallaxContainer = document.querySelector(".parallax-container");
	let parallaxText = document.querySelector(".parallax-text");

	window.addEventListener("scroll", function () {
		let scrollPosition = window.scrollY;
		let stopTransformAt = 800;

		if (scrollPosition <= stopTransformAt) {
			// Opacity background dan teks ketika scroll bawah
			let opacity_out =
				1.9 - scrollPosition / (parallaxContainer.offsetHeight / 2);
			let opacity_in =
				-1 + scrollPosition / (parallaxContainer.offsetHeight / 2);

			parallaxContainer.style.opacity = opacity_out > 0 ? opacity_out : 0;
			parallaxText.style.opacity = opacity_in > 0 ? opacity_in : 0;

			// Transform teks bergerak keatas, ketika scroll bawah
			let translateY = scrollPosition / 6;
			parallaxText.style.transform =
				"translate(-50%, calc(50% - " + translateY + "px))";
		}
		// teks menjadi relative
		let positionfixed = scrollPosition / 2;
		parallaxContainer.style.display = positionfixed > 340 ? "none" : "block";
		parallaxText.style.position = positionfixed > 340 ? "relative" : "fixed";
	});
});
