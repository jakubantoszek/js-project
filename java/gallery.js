var x=-1;
var image2;
var ima;
var div1;
var pos;
var content;
var info;

function refresh(){
	pos = window.scrollY;
	
	$("img.galeria").css("top",pos+70);
	$("img.image2").css("top",pos+20);
	$("img.left").css("top",pos+285);
	$("img.right").css("top",pos+285);
	$(".information").css("top",pos+600);
	
	setTimeout("refresh()",10);
}

function opengal(n){

	x=n;
	pos = window.scrollY;
			
	div1 = document.createElement('div');
	div1.classList.add("ground");
	div1.style.position = "absolute";
	div1.style.left = "0";
	div1.style.top = "0";
	div1.style.width = "100%";
	div1.style.height = "2100px";
	div1.style.opacity = "95%";
	div1.style.backgroundColor = "#444";
	div1.style.zIndex = "50";
	document.body.appendChild(div1);
		
	ima = document.createElement('img');
	ima.classList.add("galeria");
	image2 = document.getElementsByTagName('img')[n];
	ima.src = image2.src;
	ima.style.position = "absolute";
	ima.style.top = "70px";
	ima.style.left = "35%";
	ima.style.marginLeft = "auto";
	ima.style.marginRight = "auto";
	ima.style.width = "30%";
	ima.style.height = "500px";
	ima.style.zIndex = "51";
	document.body.appendChild(ima);
		
	var img2 = document.createElement('img');
	img2.classList.add("image2");
	img2.src = "img/x.png";
	img2.style.width = "20px";
	img2.style.position = "absolute";
	img2.style.top = "20px";
	img2.style.right = "20px";
	img2.style.cursor = "pointer";
	img2.style.zIndex = "51";
	img2.addEventListener("click", deletex);
	div1.appendChild(img2);
	
	var leftx = document.createElement('img');
	leftx.classList.add("left");
	leftx.src = "img/left.png";
	leftx.style.width = "60px";
	leftx.style.position = "absolute";
	leftx.style.top = "285px";
	leftx.style.left = "25px";
	leftx.style.cursor = "pointer";
	leftx.style.zIndex = "51";
	leftx.addEventListener("click", changetoleft);
	div1.appendChild(leftx);	
	
	var rightx = document.createElement('img');
	rightx.classList.add("right");
	rightx.src = "img/right.png";
	rightx.style.width = "60px";
	rightx.style.position = "absolute";
	rightx.style.top = "285px";
	rightx.style.right = "25px";
	rightx.style.cursor = "pointer";
	rightx.style.zIndex = "51";
	rightx.addEventListener("click", changetoright);
	div1.appendChild(rightx);	
	
	info = document.createElement('div');
	info.classList.add("information");
	content = document.createTextNode(t[n]);
	info.appendChild(content);
	info.style.fontSize = "32px";
	info.style.position = "absolute"	
	info.style.width = "100%";
	info.style.textAlign = "center"
	div1.appendChild(info);
	
	refresh();
}	
	
function deletex()
{
	div1.style.display = "none";
	ima.style.display = "none";
}
	
function changetext(num)
{
	content.remove();
	content = document.createTextNode(t[num]);
	info.appendChild(content);
}

function changetoleft()
{
	x=x-1;
	if(x<0) x=23;
	image2 = document.getElementsByTagName('img')[x];
	changetext(x);
	ima.src = image2.src;
}
	
function changetoright()
{
	x=x+1;
	if(x>23) x=0;
	image2 = document.getElementsByTagName('img')[x];
	changetext(x);
	ima.src = image2.src;
}