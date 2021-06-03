$(document).ready(function () {
	var cards = $('#card-slider .slider-item').toArray();

	startAnim(cards);

	function startAnim(array) {
		if ($('.container').width() >= 768) {
			TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.45 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });
			TweenMax.fromTo(array[1], 0.5, { x: -50, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.45, zIndex: 0, ease: Cubic.easeInOut });
			TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 55, y: 200 }, { x: -50, y: 125 }], zIndex: 1, opacity: 1, ease: Cubic.easeInOut });
			TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.45, zIndex: 0, ease: Cubic.easeInOut },);
		}
		if ($('.container').width() <= 769) {
			TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.45 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });
			TweenMax.fromTo(array[1], 0.5, { x: 0, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.45, zIndex: 0, ease: Cubic.easeInOut });
			TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 0, y: 200 }, { x: 0, y: 125 }], zIndex: 1, opacity: 1, ease: Cubic.easeInOut });
			TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.45, zIndex: 0, ease: Cubic.easeInOut },);
		}
	}

	function sortArray(array) {
		clearTimeout(delay);
		var delay = setTimeout(function () {
			var firstElem = array.shift();
			array.push(firstElem);
			return startAnim(array);
		}, 3000)
	}

	$('.hero-scroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#royale-section').offset().top
		}, 1000);
	});
})
