$(function() {
	$('.hamburger-btn').on('click', function() {
		$(this).toggleClass('open');
		$('.hamburger-btn-area').toggleClass('open');
		$('.mask').toggleClass('open');
	});
});