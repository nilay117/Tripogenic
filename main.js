window.onload =function(){

//variables
var nav = document.querySelector(".nav");
var fb =document.querySelector(".social img");
var heading = document.querySelector(".header-container .heading");
var ar = ["We travel not to escape life, but for life not to escape us.","Traveling – it leaves you speechless, then turns you into a storyteller.","The gladdest moment in human life, me thinks, is a departure into unknown lands."];
var index = 1;
var scroll = document.querySelector(".scroll img");
var scrollPos = document.querySelector(".scroll-pos");

//loading elements
heading.style.display = "block";
scroll.style.display = "block";

//changing background of nav on scrolling
addEventListener("scroll",function(){
	if(pageYOffset >= innerHeight )
	{
		addEventListener("scroll",function(){
			if(pageYOffset < innerHeight)
			{
				nav.style.backgroundColor = "";
			}
		},false);
		nav.style.backgroundColor = "#4274f4";
	}
},false);

//scrolling
scroll.addEventListener("click",function(){
	scrollPos.scrollIntoView({block: "start", behavior: "smooth"});
})

//changing qoute
setInterval(function(){
	heading.innerHTML = ar[index];
	index++;
	if(index == 3)
	{
		index = 0;
	}
},6000);

 //hover on social icons
fb.addEventListener("mouseover",function(){
	fb.src = "Images/fb2.png"; 
	fb.addEventListener("mouseout",function(){
		fb.src = "Images/fb.png";
	},false)
},false)

//mob_nav
console.log(innerWidth);
//if(innerWidth <= 450){
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var nav2 = document.querySelector(".nav2");
var navtxt = document.querySelector(".nav2 ul");
first.style.display = "block";

first.addEventListener("click",function(){
		var tmp = 0;
		second.style.display ="block";
		var a = setInterval(function(){
			tmp++;
			nav2.style.width = tmp + "%";
			if(nav2.style.width == "20%")
			{
				clearInterval(a);
			}
		},10);
		window.setTimeout(function(){
			navtxt.style.fontSize = "150%";
			first.style.display = "none";
		},210);
	},false);


second.addEventListener("click",function(){
		var tmp = 20;
		navtxt.style.fontSize = "0%";
		var a = setInterval(function(){
			tmp--;
			nav2.style.width = tmp + "%";
			if(nav2.style.width == "0%")
			{
				clearInterval(a);
			}
		},10);
		window.setTimeout(function(){
			second.style.display ="none";
			first.style.display = "block";
		},250);
	},false);
}