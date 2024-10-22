let swiper = new Swiper(".mySwiper", {
	spaceBetween: 32,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	mousewheel: true,
	keyboard: true,

	slidesPerView: "auto",
	centeredSlides: false,
	loop: false,

	freeMode: true,
	grabCursor: true,
	initialSlide: 0,
	slidesPerGroup: 2,
	watchSlidesVisibility: false,
});
