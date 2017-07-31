requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});//config配置
define(["jquery"],function($){
        function Carousel(settings){
            this.defaultSettings={
                selector : document.body,//位置不传
                imgArr : [],//没有默认图片，就是空
                speed:500,
                buttonStyle:"square",//circle
                arrowsPos:"bottom"//center
            };//默认属性等于一个对象
            $.extend(this.defaultSettings,settings);//合并
            this.$container=$('<div class="carousel-container"></div>');
            this.$imgs=$('<div class="carousel-imgs"></div>');
            this.$nav=$('<ul class="carousel-nav"></ul>');
            this.$arrows=$('<div class="carousel-arrows"></div>');
            this.$left=$('<div class="carousel-left">&lt;</div>');
            this.$right=$('<div class="carousel-right">&gt;</div>');
        }
            Carousel.prototype.init=function(){
                var nowIndex=0;
                this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
                this.$arrows.append(this.$left).append(this.$right);
                for(var i=0;i< this.defaultSettings.imgArr.length;i++){
                this.$imgs.append("<img src='"+ this.defaultSettings.imgArr[i] +"'>");
                    this.$nav.append("<li>"+ (i+1) +"</li>");
                }
                $("img",this.$imgs).eq(0).addClass("selected");//在imgs里找img，缩小范围
                $("li",this.$nav).eq(0).addClass("selected");
                $(this.defaultSettings.selector).append(this.$container);
                //事件
                $(".carousel-nav li").on("mouseover",function(){
                    nowIndex=$(this).index();
                    changeImg();
                    $(this).addClass("selected").siblings().removeClass("selected");
                    $(".carousel-imgs img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
                });
                this.$left.on("click",function(){
                    nowIndex--;
                    if(nowIndex == -1){
                        nowIndex=this.defaultSettings.imgArr.length-1;
                    }
                    changeImg();
                }.bind(this));
                this.$right.on("click",function(){
                    nowIndex++;
                    if(nowIndex ==this.defaultSettings.imgArr.length ){
                        nowIndex=0;
                    }
                    changeImg();
                }.bind(this));

                this.$container.hover(function(){
                    clearInterval(timer);
                },function(){
                    setInterval(function(){
                        this.$right.trigger("click");//trigger：模拟事件的触发
                    }.bind(this),this.defaultSettings.speed);
                }.bind(this ));//一个鼠标划入 一个鼠标划出
                //不写这个bind this之前，这个this--->this.$container,就变成container下的right了，这样就报错了

                var timer=setInterval(function(){
                    this.$right.trigger("click");//trigger：模拟事件的触发
                }.bind(this),this.defaultSettings.speed); //不加bind之前的this指向的是window

                //私有方法 只有在里面才能用到
                function changeImg(){
                    $(".carousel-nav li").eq(nowIndex) .addClass("selected").siblings().removeClass("selected");
                    $(".carousel-imgs img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
                }


            };return Carousel;
});
//声明不需要加括号，在那边调用才用括号
//setting 形参
//for循环 需要字符串

