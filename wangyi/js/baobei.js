
//jq-轮播图
function Broadcast(){}
$.extend(Broadcast.prototype,{
    init:function(options){
        this.item_list = $(options.item_list);
        this.left_btn = $(options.left_btn);
        this.right_btn = $(options.right_btn);
        this.list_btn = $(options.list_btn);
        this.box = $(options.box);
        this.list = this.item_list.parent();
        this.width =$(options.width)[0];
        this.nowIndex = 0 ;
        this.item_num = this.item_list.length;
        if(this.left_btn.length == 0 && this.right_btn == 0
        && this.list_btn.length == 0){
            this.autoPlay();
        }else{
            this.bindEvent();
        }
        if(options.autoPlay){
            this.autoPlay();
        }
    },
    bindEvent:function(){
        this.left_btn.click($.proxy(this.prev,this));
        this.right_btn.click($.proxy(this.next,this));
        this.list_btn.mouseover($.proxy(this.toIndex,this));

    },
    next:function(){
        if(this.nowIndex == this.item_num - 1){
            this.list.css({
                left:0
            })
            this.nowIndex = 1;
        }else{
            this.nowIndex ++ ;
        }
        this.animate();
    },
    prev:function(){
        if(this.nowIndex == 0){
            this.nowIndex = this.item_num - 2;
            this.list.css({
                left: - this.width*(this.item_num - 1)
            })
        }else{
            this.nowIndex -- ;
        }
        this.animate();
    },
    toIndex:function(event){
        var target = event.target ;
        this.nowIndex = $(target).index();
        this.animate();
    },
    autoPlay:function(){
        this.box.mouseenter(function(){
            clearInterval(this.bannerTimer)
        }.bind(this))

        this.box.mouseleave(function(){
            this.bannerTimer = setInterval(function(){
                this.next();
            }.bind(this) ,  2000)
        }.bind(this)).trigger("mouseleave");
        
    },
    animate:function(){
        this.list.stop().animate({
            left : -this.nowIndex * this.width
        })
        this.list_btn.removeClass("active");
        
        var index
        if(this.nowIndex == this.item_num - 1){
           index = 0;
        }else{
            index = this.nowIndex;
        }
        this.list_btn.eq(index).addClass("active"); 
    }
})
//