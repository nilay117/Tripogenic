window.onload =function(){

//variables
var nav = document.querySelector(".nav");
var fb =document.querySelector("#fb");
var tw =document.querySelector("#tw");
var heading = document.querySelector(".header-container .heading");
var ar = ["We travel not to escape life, but for life not to escape us.","Traveling – it leaves you speechless, then turns you into a storyteller.","The gladdest moment in human life, me thinks, is a departure into unknown lands."];
var index = 1;
var scroll = document.querySelector(".scroll img");
var scrollPos = document.querySelector(".scroll-pos");
var navwrap = document.querySelector(".navwrap");

//loading elements
heading.style.display = "block";
scroll.style.display = "block";


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
tw.addEventListener("mouseover",function(){
	tw.src = "Images/twitter2.png"; 
	tw.addEventListener("mouseout",function(){
		tw.src = "Images/twitter.png";
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
		var tmp2 = 0;
		second.style.display ="block";
		navwrap.style.display = "block";
		var a = setInterval(function(){
			tmp += 0.5;
			tmp2 += 0.025;
			nav2.style.opacity = tmp2;
			nav2.style.width = tmp + "%";
			if(nav2.style.width == "20%")
			{
				clearInterval(a);
			}
		},8);
		window.setTimeout(function(){
			navtxt.style.fontSize = "150%";
			first.style.display = "none";
		},210);
	},false);


second.addEventListener("click",function(){
		var tmp = 20;
		var tmp2 = 1;
		navtxt.style.fontSize = "0%";
		navwrap.style.display = "none"; 
		var a = setInterval(function(){
			tmp -= 0.5;
			tmp2 -= 0.025;
			nav2.style.width = tmp + "%";
			nav2.style.opacity = tmp2;
			if(nav2.style.width == "0%")
			{
				clearInterval(a);
			}
		},8);
		window.setTimeout(function(){
			second.style.display ="none";
			first.style.display = "block";
		},250);
	},false);


//login
var login = document.querySelector(".buttonl ");
var loginwrap = document.querySelector(".wrapper-login");
var box = document.querySelector(".wrapper-login #formbox");
var cross = document.querySelector(".wrapper-login img");
login.addEventListener("click",function(){
		var tmp = 0;
		var tmp2 = 50;
		var a = setInterval(function(){
			tmp ++;
			tmp2 -= 0.5;
			cross.style.display="block";
			loginwrap.style.top = tmp2 + "%";
			loginwrap.style.height = tmp + "%";
			if(loginwrap.style.height == "100%")
			{
				clearInterval(a);
			}
		},4);
		window.setTimeout(function(){
			box.style.display = "block";
		},400);
		cross.addEventListener("click",function(){
		var tmp = 100;
		var tmp2 = 0;
		var a = setInterval(function(){
			tmp--;
			tmp2 += 0.5;
			cross.style.display = "none";
			loginwrap.style.top = tmp2 + "%";
			loginwrap.style.height = tmp + "%";
			if(loginwrap.style.height == "0%")
			{
				clearInterval(a);
			}
		},4);
			box.style.display = "none";
		})	
	},false);
}	