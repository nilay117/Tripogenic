window.onload =function(){
new WOW().init();
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
$(".header-container .heading").fadeIn(1000).delay(2000);
$(".header-container .heading").fadeOut(1000).delay(500);
setInterval(function(){
	heading.innerHTML = ar[index];
	index++;
	$(".header-container .heading").fadeIn(1000).delay(2000);
	$(".header-container .heading").fadeOut(1000).delay(500);
	
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
	console.log(innerHeight);
	console.log(document.body.scrollTop);
	if(document.body.scrollTop >= innerHeight){
		$(".frame").css({opacity:"1"});
		$(".hamburger .element").css({backgroundColor:"#252630"});
		$(".hamtext").css({color:"#252630"});
		$("#login a").css({color:"#252630"});
		$(".cross .element").css({backgroundColor:"#252630"});
		}
	if(document.body.scrollTop < innerHeight){
		$(".frame").css({opacity:"0.4"});
		$(".hamburger .element").css({backgroundColor:"#ffffff"});
		$(".hamtext").css({color:"#ffffff"});
		$("#login a").css({color:"#ffffff"});
		$(".cross .element").css({backgroundColor:"#ffffff"});
	}
})

//itenary page
	$('.offers .button1').click(function(){
		$('.itenary').css("display","flex");
		$('body').css("overflow","hidden");
	});
}

//cities scroll efect
$(window).scroll(function(){
	if(document.body.scrollTop >= 2*(innerHeight)){
		$('.jaipur').slideDown('100');
		setTimeout(function(){
			$(".delhi").slideDown('100')},100);
		setTimeout(function(){
			$(".agra").slideDown('100')},200);
	}
	else{
		$('.jaipur').hide();
		$('.delhi').hide();
		$('.agra').hide();
	}
})
