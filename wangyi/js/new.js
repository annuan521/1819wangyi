//新品首发
$(".yi1 img").mouseenter(function(){
	$(this).attr("src","images/new8.jpg");
})
$(".yi1 img").mouseleave(function(){
	$(this).attr("src","images/new_02.jpg")
})
$(".yi2 img").mouseenter(function(){
	$(this).attr("src","images/new3.jpg");
})
$(".yi2 img").mouseleave(function(){
	$(this).attr("src","images/new_05.gif")
})
$(".yi3 img").mouseenter(function(){
	$(this).attr("src","images/new2.jpg");
})
$(".yi3 img").mouseleave(function(){
	$(this).attr("src","images/new_07.gif")
})
$(".yi4 img").mouseenter(function(){
	$(this).attr("src","images/new1.jpg");
})
$(".yi4 img").mouseleave(function(){
	$(this).attr("src","images/new_09.gif")
})

function startMove( obj ,target , attr ){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var current = parseInt( getStyle(obj,attr) ) ;
		var speed = (target - current)/10;
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		if( target === current ){
			clearInterval( obj.timer );
		}else{
			obj.style[attr] = current + speed + "px";
		}
	},30 )
}
function getStyle(obj,attr){
	if( getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
var ali = document.querySelectorAll("#yiru a");
var imgs = document.querySelectorAll("#yiru li");
var index = 0;
console.log(imgs);
document.getElementById("right").onclick = function(){
	index++;
	if(index >= 4){
		index = 3;
	}
	startMove(imgs,-ali[0].offsetWidth*index*4,"left")
}