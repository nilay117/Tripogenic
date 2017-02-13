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


//scrolling


//changing qoute
setInterval(function(){
	$(".header-container .heading").fadeIn(1000).delay(2000);;
	$(".header-container .heading").fadeOut(1000).delay(500);
	heading.innerHTML = ar[index];
	index++;
	if(index == 3)
	{
		index = 0;
	}
},4500);

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
$(document).on('click','.hamburger',function(){
	console.log("a");
	$('.nav2').animate({left:"4%",opacity:1},1000,function(){
			$('.nav2 li:nth-child(1)').fadeIn("fast",function(){
				$('.nav2 li:nth-child(2)').fadeIn("fast",function(){
					$('.nav2 li:nth-child(3)').fadeIn("fast",function(){
						$('.nav2 li:nth-child(4)').fadeIn("fast")			
					});
				});
			});
	});
})

$(document).on('click','.cross',function(){
	console.log("b");
	$('.nav2').animate({left:"-34%",opacity:0},1000,function(){
		$('.nav2 li:nth-child(1)').fadeOut("fast",function(){
				$('.nav2 li:nth-child(2)').fadeOut("fast",function(){
					$('.nav2 li:nth-child(3)').fadeOut("fast",function(){
						$('.nav2 li:nth-child(4)').fadeOut("fast")			
					});
				});
			});
	});
})

//hamburger
$('.hamburger').click(function(){
	$('.cross').css({"display":"block"});
	$(this).css({"display":"none"});
})


$('.cross').click(function(){
	$('.hamburger').css({"display":"block"});
	$(this).css({"display":"none"});
})
//login
var login = document.querySelector("#login ");
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
//frame change on scroll
$(window).scroll(function(){
	if(document.body.scrollTop >= innerHeight){
		$(".frame").css({opacity:"1"});
		$(".hamburger .element").css({backgroundColor:"#3d2f1f"});
		$(".hamtext").css({color:"#3d2f1f"});
		$("#login a").css({color:"#3d2f1f"});
		$(".cross .element").css({backgroundColor:"#3d2f1f"});
		}
	if(document.body.scrollTop < innerHeight){
		$(".frame").css({opacity:"0.4"});
		$(".hamburger .element").css({backgroundColor:"#ffffff"});
		$(".hamtext").css({color:"#ffffff"});
		$("#login a").css({color:"#ffffff"});
		$(".cross .element").css({backgroundColor:"#ffffff"});
	}
})

//animated heading


}