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
	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

});

// Tabs
$(function () {
	$("#tabs").tabs();
});