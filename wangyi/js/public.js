//写一个函数 功能获取任意区间值公式
function rand(min,max){
	return Math.round(  Math.random()*(max-min) + min );
}

//获取六位十六进制颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";//拼接六位十六进制字符
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}
function dataToString( now , sign ){
	//sign表示日期的拼接符号
	//设置sign的默认值  如果用户传递sign参数 就使用用户传递的参数
	//否则就使用默认值
	sign = sign || "-";
	
	//获取日期的年月日 
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	//获取日期的时分秒
	var h = toTwo( now.getHours() );
	var mi = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	//定义自己的时间格式
	var str = y + sign + m + sign + d + " " + h + ":" + mi + ":" + s;
	return str;
}
//定义一个函数 功能是在小于10的数字前拼接0
function toTwo( num ){
	return num < 10 ? "0" + num : num;
}

//定义一个时间差函数 
function diff(start,end){
	return (end.getTime() - start.getTime())/1000;
}

//字母数字验证码
function yzm(){
	var str = "";//用来存放验证码
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand(48,122);
		if( code >= 58&&code <= 64 ||code >= 91 && code <= 96 ){
			i--;
		}else{
			var ch = String.fromCharCode( code );
			str += ch;
		}
	}
	//console.log( str );
	return str;
}