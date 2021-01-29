

var bh = document.getElementById('btn_header');
btn_header.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('p.text_header');
	text.classList.add('green');
	var th = document.querySelector('.title_header');
	th.style.display = 'none';
	document.querySelector('.way').style.marginLeft = '300px';
	var header = document.querySelector('header');
	header.style.background = '#8919e6';
}

var bi = document.getElementById('btn_input');
btn_input.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('.credits');
	text.classList.add('green');
	var input = document.querySelector('.input1');
	input.style.display = 'none';
	var future = document.querySelector('.future');
	future.style.background = 'red';
}


$(function () {
	$(window).scroll(function() {
	    $('.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.want1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.want2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.want3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("bounceInUp");
	        }
	    });
	});
})