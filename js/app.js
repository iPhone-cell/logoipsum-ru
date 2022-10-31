$(function () {

	// Smooth scroll
	$("[data-scroll").on("click", function (event) {
		event.preventDefault();
		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		console.log(elementOffset);

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});

	// Nav Toggle
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	let burgerItem = $('#burgerItem');
	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
		burgerItem.toggleClass("active");
	});

	// Tabs
	$('.tabs-wrapper').each(function () {
		let ths = $(this);
		ths.find('.tab-item').not(':first').hide();
		ths.find('.tab').click(function () {
			ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
			ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass('active');
	});
});


