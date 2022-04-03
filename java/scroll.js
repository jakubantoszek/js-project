$(function() {

    $("a#l1").click(function(){
		$('html,body').animate({scrollTop: $("#coto").offset().top}, 1000);
		return false;
	});
	
	$("a#l2").click(function(){
		$('html,body').animate({scrollTop: $("#historia").offset().top}, 1300);
		return false;
	});
	
	$("a#l3").click(function(){
		$('html,body').animate({scrollTop: $("#technika").offset().top}, 1600);
		return false;
	});
	
	$("a#l4").click(function(){
		$('html,body').animate({scrollTop: $("#ankieta").offset().top}, 1900);
		return false;
	});
	
	$("a#l5").click(function(){
		$('html,body').animate({scrollTop: $("#sites").offset().top}, 2200);
		return false;
	});
	
	
});

var stan=0;

function right()
{
	var width = $(window).width();
	var cont = $('#container').width();
	var n = (width-cont)/8;
	$("img.scrollim").css("right",n);
	setTimeout("right()",10);
}

function sprawdz()
{
	var x = window.scrollY;
	if(x>=250)
	{
		var a=x*8;
		if(stan==0)
		{
			stan=1;
			
			$('<img></img>',{
			src: 'img/scrollup.png',
			class: 'scrollim',
			width: '5%'
			}).appendTo('body');
			
			var width = $(window).width();
			var cont = $('#container').width();
			var n = (width-cont)/8;
			right();
			
			$("img.scrollim").css("position","absolute");
			$("img.scrollim").css("top","600px");
			$("img.scrollim").css("right",n);
			$("img.scrollim").css("cursor","pointer");
		
			$("img.scrollim").click(function(){
			$('html,body').animate({scrollTop: $("header").offset().top}, a);
		});
		}
		var pos = x + 550;
		$("img.scrollim").css("top",pos);
		
	}
	
	else 
	{
		if(x<250)
		{
			$( "img.scrollim" ).remove();
			stan=0;
		}
	}
	setTimeout("sprawdz()",10);
}