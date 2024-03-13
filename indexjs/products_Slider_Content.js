const initSlider = () => {
	const imageList = document.querySelector(".slider-wrapper .image-list");
	const slideButtons = document.querySelectorAll(
		".slider-wrapper .slide-button"
	);
	const sliderScrollBar = document.querySelector(
		".container .slider-scrollbar"
	);
	const scrollbarThumb = sliderScrollBar.querySelector(".scrollbar-thumb");
	const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

	scrollbarThumb.addEventListener("mousedown", (e) => {
		const startX = e.clientX;
		const thumbPosition = scrollbarThumb.offsetLeft;

		const handleMouseMove = (e) => {
			const deltaX = e.clientX - startX;
			const newThumbPosition = thumbPosition + deltaX;
			const MaxThumbPosition =
				sliderScrollBar.getBoundingClientRect().width -
				scrollbarThumb.offsetWidth;

			const boundedPosition = Math.max(
				0,
				Math.min(MaxThumbPosition, newThumbPosition)
			);
			const scrollPosition =
				(boundedPosition / MaxThumbPosition) * maxScrollLeft;

			scrollbarThumb.style.left = `${boundedPosition}px`;
			imageList.scrollLeft = scrollPosition;
		};

		const handleMouseUp = () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	});

	slideButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const direction = button.id === "prev-slide" ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
		});
	});

	// Button Clicks
	const handleSlideButtons = () => {
		slideButtons[0].style.display =
			imageList.scrollLeft <= 0 ? "none" : "block";
		slideButtons[1].style.display =
			imageList.scrollLeft >= maxScrollLeft ? "none" : "block";

		// console.log("scroll left " + imageList.scrollLeft);
		// console.log("max scroll left " + maxScrollLeft);
	};

	// Slider Slide
	const updateScrollThumbPosition = () => {
		const scrollPosition = imageList.scrollLeft;
		const thumbPosition =
			(scrollPosition / maxScrollLeft) *
			(sliderScrollBar.clientWidth - scrollbarThumb.offsetWidth);
		scrollbarThumb.style.left = `${thumbPosition}px`;
	};

	imageList.addEventListener("scroll", () => {
		handleSlideButtons();
		updateScrollThumbPosition();
	});
};

window.addEventListener("load", initSlider);
