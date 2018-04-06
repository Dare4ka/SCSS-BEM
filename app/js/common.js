// $(function() {

// 	// Пользовательские функции

// });
$(document).ready(function() {

			// инициализация плагина Masonry
var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
       itemSelector: '.grid__item',
       columnWidth: '.grid__item',
       percentPosition: true
       
    });
});

			// открытие поля поиска
$('.search__btn').click(function () {

	$('.search__input').toggleClass('search__input_open');
	dropdown2.removeClass('dropdown2_open');
	dropdown.removeClass('dropdown_open');
	console.log($(document).width())
	if ($(document).width() > 771 && $(document).width() < 1000) {
		if ($('.search__input').hasClass('search__input_open')) {
			$('.menu-open').css('display', 'block');
			$('.menu_navigation').addClass('menu_navigation_js');
		} else {
			$('.menu-open').css('display', 'none');
			$('.menu_navigation').removeClass('menu_navigation_js');
		}
	}
	if ($(document).width() < 480) {
		if ($('.search__input').hasClass('search__input_open')) {
			$('.logo').css('display', 'none');
			console.log($(document).width())
		} else {
			$('.logo').css('display', 'block');
		}
	}
	
});


			// выпадающее меню
var dropdown = $('.dropdown');
var dropdown2 = $('.dropdown2');

var dropdownOpen = function dropdownOpen(link, down, classToggle) {
	link.parent().siblings().find(down).removeClass(classToggle);
	if (link.siblings(down).hasClass(classToggle)) {
		link.siblings(down).removeClass(classToggle);
	} else {
		link.siblings(down).addClass(classToggle);
	}
};


var documentWidth = $(document).width();



$('.menu__link_navigation').click(function () {

	dropdownOpen($(this), dropdown, 'dropdown_open');
	dropdown2.removeClass('dropdown2_open');
	// console.log($(this).siblings('.dropdown').width());

	var left = $(this).siblings().offset().left;
	var width = $(this).siblings().width();
	var downPosition = left + width;
	var leftPosition = documentWidth - width - 10 - left;
	if (documentWidth < downPosition) {
		$(this).siblings().css('left', leftPosition + 'px');
	}
	
});

$('.dropdown__link').click(function () {

	dropdownOpen($(this), dropdown2, 'dropdown2_open');

	var left = $(this).siblings().offset().left;
	var width = $(this).siblings().width();
	var downPosition = left + width;
	
	if (documentWidth < downPosition) {
		$(this).siblings().css('left', '-99%');
	}
});



			// открытие навигационного меню на маленьких экранах
$('.menu-open').click(function(){

	$('.menu-open__global_top').toggleClass('menu-open__global_top_open');
	$('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
	$('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
	$('.menu_navigation').toggleClass('menu_navigation_open');
	dropdown.removeClass('dropdown_open');
	dropdown2.removeClass('dropdown2_open');
});

// var menu = $('.menu_navigation');

// $('*:not(menu)').click(function () {
// 	dropdown.removeClass('dropdown_open');
// 	dropdown2.removeClass('dropdown2_open');
// });













});

// $(window).load(function() {
// 	if ($(document).width() < 770) {
// 			$('.menu-open').css('display', 'block');
// 		} else {
// 			$('.menu-open').css('display', 'none');
// 		}
// 	});