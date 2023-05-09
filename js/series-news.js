window.onload = function() {

	new Swiper(".sn-series-news", {
		slidesPerView: 5,
		spaceBetween: 24,
		simulateTouch: false,
		navigation: {
			nextEl: ".series-news .sn-next-bt",
			prevEl: ".series-news .sn-prev-bt",
		},
		on: {
			activeIndexChange: function () {
				let prevBtn = document.querySelector(".sn-prev-bt");
				let nextBtn = document.querySelector(".sn-next-bt");
				if (this.realIndex == 0) {
					prevBtn.style.display = "none";
				} else if (this.realIndex == 14) {
					nextBtn.style.display = "none";
				} else {
					prevBtn.style.display = "block";
					nextBtn.style.display = "block";
				}
			},
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1240: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1528: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});
}