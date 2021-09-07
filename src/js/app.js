//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/masonry-layout/dist/masonry.pkgd.min.js
//= ../../node_modules/owl.carousel2/dist/owl.carousel.js
//= ../../node_modules/imagesloaded/imagesloaded.pkgd.min.js

$(function() {

 	var openMenuClass = 'open-menu';
	var headerPanel = $('.header');
	var mainContainer = $('body');
	var btn = headerPanel.find('.mobile-menu-btn');

 	init();

	function init() {
		btnClickListener();
		initOwlCarousel();
		initMasonry();
	}	

	function btnClickListener() {
		if (btn.length) {
			btn.on('click', function () {
				mainContainer.toggleClass(openMenuClass);
			});
		}
	}

	function initOwlCarousel () {
		$('.full-carousel').owlCarousel({
			loop: true,
			nav: true,
			navText: "",
			items: 1,
		})

		$('.info-carousel').owlCarousel({
			loop: true,
			nav: true,
			navText: "",
			items: 1,
		})

		$('.wedding-carousel').owlCarousel({
			loop: true,
			nav: true,
			items: 1,
			navText: "",
			responsive:{

		        769:{
		        	center: true,
					margin: 25,
					center: true,
		            items: 2
		        }
		    }
		})
	}

	function initMasonry() {
		var $grid = $('.grid').masonry({
		  // options...
			itemSelector: '.grid-item',
			percentPosition: true,
			columnWidth: '.grid-sizer'
		});

		$grid.imagesLoaded().progress( function() {
		  $grid.masonry('layout');
		});	
	} 
	
});
