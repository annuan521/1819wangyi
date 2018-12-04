function ajaxPromise(url,data){
    if( arguments.length == 2 ){
        url = url + "?" + data;
    }
    var pro = new Promise(function(success,failed){
        var ajax = new XMLHttpRequest();
        ajax.open("GET",url);//url全称
        ajax.send();
        ajax.onreadystatechange = function(){
            if( ajax.readyState == 4 && ajax.status == 200 ){
                //表示请求成功 
                success( ajax.responseText );
            }
        }
        
        //经过5000    如果服务器没有返回数据      通知用户请求失败
        setTimeout(function(){
            failed("请求数据失败");
        },5000)
        
    })
    
    //返回一个promise对象
    return pro;
}
