(function($){
	$(document).ready(function() {
		$('.header .navbar').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750
		});
	});
	 $(window).load(function() {
	   document.getElementById("loading").style.display = "none";
	});

})(jQuery);