

document.getElementsByClassName("login").onclick = function () {
	location.href = "login.html";
	return false;
}

//搜索框
$("search").onmousedown = function(){
		document.querySelector(".click").css("display","none");
		$("box").css("dispaly","block");
}
function getData(data){
	// console.log(data);
	var arr = data.s;
	var str = "";
	for( var i = 0 ; i <　arr.length ; i++ ){
		str += `<li><a href="https://www.baidu.com/s?wd=${arr[i]}">${ arr[i] }</a></li>`;
	}
	box.innerHTML = str;
}
search.onkeyup = function(){
	var txt = search.value;
	// console.log(txt);
	var sc = document.createElement("script");
	sc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txt+"&cb=getData"
	document.body.appendChild( sc );
}
//吸顶
var h = $(".nav").offset().top;
$(window).scroll(function(){
	var top = $(document).scrollTop();
        if (top > h) {
			$(".nav").css({"position":"fixed","background":"#fff","width":"100%","border-bottom":"1px solid #ccc"} );
            $(".nav").animate({"top":0},0);
        } else {
            $(".nav").css("position", "");
        }
})
//轮播图
var timer = null;
var	index = 0;
var	$ulist = $("#ban li");
var	$olist = $(".bann li");
// console.log($ulist)
timer = setInterval(autoPlay, 3000);
function autoPlay() {
	index++;
	if (index == $ulist.length) {
		index = 0;
	}
	$olist.eq(index).css("background", "#bbb").siblings().css("background", "#fff");
	$ulist.eq(index).fadeIn(1300).siblings().fadeOut(1300);
}
$olist.mouseenter(function () {
	clearInterval(timer);
	index = $(this).index() - 1;
	autoPlay();
}).mouseleave(function () {
	timer = setInterval(autoPlay, 2000);
})
//左侧固定栏
$(function () {
	var fheight = $('.footer').height() + 30; // 获取底部及底部上方边距的总高度
	var boxfixed = $('.list-left');  // 获取固定容器的jquery对象
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();  // 获取滚动条滚动的高度
		var contLeftTop = $('#brand').offset().top + 20; // 右侧列表相对于文档的高度
		var scrollBottom = $(document).height() - $(window).scrollTop() - boxfixed.height();
		if (scrollTop >= contLeftTop) {
			if (scrollBottom > fheight) {  // 滚动条距离底部的距离大于fheight,添加tab_fix类,否则添加tab_fix_bottom类
				boxfixed.removeClass("tab_fix_bottom").addClass('tab_fix');
			} else {
				boxfixed.removeClass('tab_fix').addClass("tab_fix_bottom");
			}
		} else if (scrollTop < contLeftTop) {
			boxfixed.removeClass('tab_fix').removeClass("tab_fix_bottom");
		}
	})
})
//点击楼层获取对应内容 
var $list = $("#LoutiNav li:not(.one, .first)"),  //楼层号
	$floor =$(".louti");   //对应楼层
	  //操作li的样式
	  $list.click( function(){
			//获取当前点击li的楼层下标
			var index =  $(this).index();
			//根据下标获取对应楼层（div）相对于内容窗口的top
			var top = $floor.eq(index-2).offset().top;
			//设置滚动条滚动的距离
			$("html,body").animate( {"scrollTop":top },1000)
	  })
	  //操作滚动条 使div与li对应
	  $(window).scroll(function(){
		  //获取页面滚走的距离
		  var sTop = $(document).scrollTop();
	  })

//限时购倒计时
function diff(start,end){
	return (end.getTime() - start.getTime())/1000;
}
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var start = new Date();
var end = new Date("2018-12-25 22:00:00");
var t = diff(start,end);
function showTime(){
	if( t < 0){
		return;
	}
	var h = parseInt( t/3600 );
	var m = parseInt( (t-h*3600)/60);
	var s = parseInt( t - h *3600 - m*60 );
	p1.innerHTML = h;
	p2.innerHTML = m;
	p3.innerHTML = s;
}
showTime();
var timer = setInterval(function(){
	t--;
	if( t<0 ){
		clearInterval(timer);
	}else{
		showTime();
	}
},1000)
//福利社轮播
var timer1 = null;
var indexs = 0;
var $listu = $("#b li");
var $listo= $(".ba li");
// console.log($listu)
timer1 = setInterval(auto, 2000);
function auto() {
	indexs++;
	if (indexs == $listu.length) {
		indexs = 0;
	}
	$listo.eq(indexs).css("background", "#bbb").siblings().css("background", "#fff");
	$listu.eq(indexs).fadeIn(1300).siblings().fadeOut(1300);
}
$listo.mouseenter(function () {
	clearInterval(timer1);
	indexs = $(this).index() - 1;
	auto();
}).mouseleave(function () {
	timer1 = setInterval(auto, 2000);
})