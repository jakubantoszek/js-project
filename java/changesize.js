	function changesize(n,pdtop,pdbottom,pd3)
	{
		document.body.style.fontSize = n;
		var styl1 = document.getElementById('foot');
		styl1.style.paddingTop = pdtop;
		styl1.style.paddingBottom = pdbottom;
			
		var t = document.getElementsByTagName('a');
		for(var i=0; i<7; i=i+1)
		{
			t[i].style.paddingTop = pd3;
		}
			
		sessionStorage.setItem("fontsize",n);
		sessionStorage.setItem("padtop",pdtop);
		sessionStorage.setItem("padbottom",pdbottom);
		sessionStorage.setItem("padtop2",pd3);
	}
		
	function changecolor(c1,c2,c3,c4)
	{
		document.body.style.backgroundColor = c1;
		var head = document.getElementsByTagName('header')[0];
		head.style.backgroundColor = c2;
		var foot = document.getElementsByTagName('footer')[0];
		foot.style.backgroundColor = c2;
		var nav = document.getElementsByTagName('nav')[0];
		nav.style.backgroundColor = c3;
		var foot1 = document.getElementById('foot1');
		foot1.style.backgroundColor = c3;
			
		var mainx = document.getElementsByTagName('main')[0];
		mainx.style.backgroundColor = c4;
			
		sessionStorage.setItem("color1", c1);
		sessionStorage.setItem("color2", c2);
		sessionStorage.setItem("color3", c3);
		sessionStorage.setItem("color4", c4);
	}
		
	function ustawienia(){
		if (sessionStorage['fontsize']){
			var fontsize = sessionStorage.getItem("fontsize");
			var padtop = sessionStorage.getItem("padtop");
			var padbottom = sessionStorage.getItem("padbottom");
			var padtop2 = sessionStorage.getItem("padtop2");
			changesize(fontsize,padtop,padbottom,padtop2);
		}
			
		else if (localStorage['size']){
			var fontsize = localStorage.getItem('size');
			var padtop = localStorage.getItem('ptop');
			var padbottom = localStorage.getItem('pbot');
			var padtop2 = localStorage.getItem('ptop2');
			changesize(fontsize,padtop,padbottom,padtop2);
		}
			
		if (sessionStorage['color1']){
			var color1 = sessionStorage.getItem("color1");
			var color2 = sessionStorage.getItem("color2");
			var color3 = sessionStorage.getItem("color3");
			var color4 = sessionStorage.getItem("color4");
			changecolor(color1,color2,color3,color4);
		}
			
		else if (localStorage['c1']){
			var color1 = localStorage.getItem('c1');
			var color2 = localStorage.getItem('c2');
			var color3 = localStorage.getItem('c3');
			var color4 = localStorage.getItem('c4');
			changecolor(color1,color2,color3,color4);
		}
	}
		
	function lokal(){
		if(window.localStorage)
		{
			if (sessionStorage['fontsize']){
				var x1 = sessionStorage.getItem("fontsize");
				localStorage.setItem('size',x1);
				var x2 = sessionStorage.getItem("padtop");
				localStorage.setItem('ptop',x2);
				var x3 = sessionStorage.getItem("padbottom");
				localStorage.setItem('pbot',x3);
				var x4 = sessionStorage.getItem("padtop2");
				localStorage.setItem('ptop2',x4);
			}
				
			if (sessionStorage['color1']){
				var cl1 = sessionStorage.getItem("color1");
				localStorage.setItem('c1',cl1);
				var cl2 = sessionStorage.getItem("color2");
				localStorage.setItem('c2',cl2);
				var cl3 = sessionStorage.getItem("color3");
				localStorage.setItem('c3',cl3);
				var cl1 = sessionStorage.getItem("color4");
				localStorage.setItem('c4',cl1);
			}
		}
	}
	
	function usun(){
		if(window.localStorage)
		{
			if (localStorage["size"]){
				localStorage.removeItem("size");
				localStorage.removeItem("ptop");
				localStorage.removeItem("pbot");
				localStorage.removeItem("ptop2");
				sessionStorage.removeItem("fontsize");
				sessionStorage.removeItem("padtop");
				sessionStorage.removeItem("padbottom");
				sessionStorage.removeItem("padtop2");
			}
				
			if (localStorage["c1"]){
				localStorage.removeItem("c1");
				localStorage.removeItem("c2");
				localStorage.removeItem("c3");
				localStorage.removeItem("c4");
				sessionStorage.removeItem("color1");
				sessionStorage.removeItem("color2");
				sessionStorage.removeItem("color3");
				sessionStorage.removeItem("color4");
			}
		}
	}